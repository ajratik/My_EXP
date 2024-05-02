library(dplyr)
library(tidyverse)
library(ggpubr)
library(rstatix)
library(readr)
library(data.table)

##формируем дата сет
df = data.frame()
for (name in list.files())
{
  file = read.csv(name)[7:96,]
  file$Пол = as.character(file$Пол)
  ##удаление стимулов
  #file = file[!(file$stim_name=='compass'),]
  #file = file[!(file$stim_name=='browser'),]
  
  ##Стандартаная обработка
  file= file[file$chose_targ.corr==1,]
  file=file[!(is_outlier(file$chose_targ.time, coef = 2)),]
  
  ##Обраьотка по ячейкам дизайна
  #a = file %>%
  #  group_by(matrix_type, stim_fav) %>%
  #  identify_outliers(chose_targ.time)
  #file = file[-a$main_loop.thisN,]
  
  df = bind_rows(df, file)
}
df$group_sk_fl_neu =as.factor(df$group_sk_fl_neu)
df$stim_fav = as.factor(df$stim_fav)
df$matrix_type=as.factor(df$matrix_type)
df$Имя_Фамилия =as.factor(df$Имя_Фамилия)

##Статистика по стимулам
stim_data = df %>% 
  group_by(group_sk_fl_neu, stim_name) %>% 
  summarise(correct= mean(chose_targ.corr), time = mean(chose_targ.time))

##Пост-удаление стимулов
df = df[df$stim_name != 'documents',]

##Пост очистка выбросов
df= df[df$chose_targ.corr==1,]
df=df[!(is_outlier(df$chose_targ.time, coef = 2)),]


merged_data = df %>% 
  group_by(Имя_Фамилия, group_sk_fl_neu, matrix_type, stim_fav) %>% 
  summarise(
    acc = mean(chose_targ.corr),
    time = mean(chose_targ.time)
    )

merged_data = ungroup(merged_data)

merged_data$num = c(1:nrow(merged_data))

merged_data %>%
  group_by(matrix_type, group_sk_fl_neu, stim_fav) %>%
  get_summary_stats(time, type = "mean_sd")

bxp <- ggboxplot(
  merged_data,
  y = "time",
  x = "stim_fav", 
  #color = "matrix_type", 
  facet.by = "group_sk_fl_neu",
  palette = "jco",
  short.panel.labs = FALSE
)
bxp

bxp <- ggboxplot(
  merged_data,
  y = "time",
  x = "group_sk_fl_neu", 
  palette = "jco",
  short.panel.labs = FALSE
)
bxp

merged_data %>%
  group_by(matrix_type, group_sk_fl_neu, stim_fav) %>%
  identify_outliers(time)

a = merged_data %>%
  group_by(matrix_type, stim_fav, group_sk_fl_neu) %>%
  identify_outliers(time)
merged_data = merged_data[!(merged_data$Имя_Фамилия %in% a$Имя_Фамилия),]


#merged_data =merged_data[!(is_outlier(merged_data$time, coef = 1.5)),]

merged_data %>%
  group_by(matrix_type, stim_fav, group_sk_fl_neu) %>%
  shapiro_test(time)

ggqqplot(merged_data, "time", ggtheme = theme_bw()) +
  facet_grid(stim_fav + matrix_type ~ group_sk_fl_neu, labeller = "label_both")


merged_data %>%
  group_by(matrix_type, stim_fav) %>%
  levene_test(time ~ group_sk_fl_neu)

res.aov <- anova_test(
  data = merged_data, dv = time, wid = Имя_Фамилия,
  between = group_sk_fl_neu, within = c(matrix_type, stim_fav)
)

get_anova_table(res.aov)

wide =dcast(merged_data, Имя_Фамилия ~ stim_fav + matrix_type, value.var = 'time')

name_design = merged_data %>% select(group_sk_fl_neu, Имя_Фамилия) %>% unique()

wide = left_join(wide, name_design, 'Имя_Фамилия')
write.csv(wide, 'wide.csv')
