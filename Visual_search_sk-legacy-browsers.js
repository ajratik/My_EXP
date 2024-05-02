/************************* 
 * Visual_Search_Sk *
 *************************/


// store info about the experiment session:
let expName = 'Visual_search_sk';  // from the Builder filename that created this script
let expInfo = {
    'Имя_Фамилия': '',
    'Пол': '',
    'Возраст': '',
    'group_sk_fl_neu': '',
};

// Start code blocks for 'Before Experiment'

function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}


function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}


function ifelse(cond, trueresp, falseresp) {
    if (cond) {return trueresp}
    else {return falseresp}
}

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0.6236, 0.6236, 0.6236]),
  units: 'pix',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(welcome_instrRoutineBegin());
flowScheduler.add(welcome_instrRoutineEachFrame());
flowScheduler.add(welcome_instrRoutineEnd());
flowScheduler.add(test_instrRoutineBegin());
flowScheduler.add(test_instrRoutineEachFrame());
flowScheduler.add(test_instrRoutineEnd());
const test_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(test_loopLoopBegin(test_loopLoopScheduler));
flowScheduler.add(test_loopLoopScheduler);
flowScheduler.add(test_loopLoopEnd);




flowScheduler.add(main_instrRoutineBegin());
flowScheduler.add(main_instrRoutineEachFrame());
flowScheduler.add(main_instrRoutineEnd());
const main_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(main_loopLoopBegin(main_loopLoopScheduler));
flowScheduler.add(main_loopLoopScheduler);
flowScheduler.add(main_loopLoopEnd);



flowScheduler.add(outroRoutineBegin());
flowScheduler.add(outroRoutineEachFrame());
flowScheduler.add(outroRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'resources/2_sk.png', 'path': 'resources/2_sk.png'},
    {'name': 'resources/32_sk.png', 'path': 'resources/32_sk.png'},
    {'name': 'resources/21_sk.png', 'path': 'resources/21_sk.png'},
    {'name': 'resources/20_sk.png', 'path': 'resources/20_sk.png'},
    {'name': 'resources/9_sk.png', 'path': 'resources/9_sk.png'},
    {'name': 'resources/27_sk.png', 'path': 'resources/27_sk.png'},
    {'name': 'resources/38_sk.png', 'path': 'resources/38_sk.png'},
    {'name': 'resources/18_sk.png', 'path': 'resources/18_sk.png'},
    {'name': 'resources/31_sk.png', 'path': 'resources/31_sk.png'},
    {'name': 'resources/19_sk.png', 'path': 'resources/19_sk.png'},
    {'name': 'resources/8_sk.png', 'path': 'resources/8_sk.png'},
    {'name': 'resources/25_sk.png', 'path': 'resources/25_sk.png'},
    {'name': 'resources/26_sk.png', 'path': 'resources/26_sk.png'},
    {'name': 'resources/4_sk.png', 'path': 'resources/4_sk.png'},
    {'name': 'resources/5_sk.png', 'path': 'resources/5_sk.png'},
    {'name': 'resources/23_sk.png', 'path': 'resources/23_sk.png'},
    {'name': 'resources/28_sk.png', 'path': 'resources/28_sk.png'},
    {'name': 'resources/11_sk.png', 'path': 'resources/11_sk.png'},
    {'name': 'resources/33_sk.png', 'path': 'resources/33_sk.png'},
    {'name': 'resources/14_sk.png', 'path': 'resources/14_sk.png'},
    {'name': 'resources/34_sk.png', 'path': 'resources/34_sk.png'},
    {'name': 'resources/24_sk.png', 'path': 'resources/24_sk.png'},
    {'name': 'resources/22_sk.png', 'path': 'resources/22_sk.png'},
    {'name': 'resources/6_sk.png', 'path': 'resources/6_sk.png'},
    {'name': 'resources/29_sk.png', 'path': 'resources/29_sk.png'},
    {'name': 'resources/7_sk.png', 'path': 'resources/7_sk.png'},
    {'name': 'resources/35_sk.png', 'path': 'resources/35_sk.png'},
    {'name': 'resources/36_sk.png', 'path': 'resources/36_sk.png'},
    {'name': 'resources/1_sk.png', 'path': 'resources/1_sk.png'},
    {'name': 'resources/3_sk.png', 'path': 'resources/3_sk.png'},
    {'name': 'resources/15_sk.png', 'path': 'resources/15_sk.png'},
    {'name': 'resources/39_sk.png', 'path': 'resources/39_sk.png'},
    {'name': 'resources/17_sk.png', 'path': 'resources/17_sk.png'},
    {'name': 'resources/16_sk.png', 'path': 'resources/16_sk.png'},
    {'name': 'resources/37_sk.png', 'path': 'resources/37_sk.png'},
    {'name': 'resources/40_sk.png', 'path': 'resources/40_sk.png'},
    {'name': 'resources/30_sk.png', 'path': 'resources/30_sk.png'},
    {'name': 'resources/10_sk.png', 'path': 'resources/10_sk.png'},
    {'name': 'resources/13_sk.png', 'path': 'resources/13_sk.png'},
    {'name': 'resources/12_sk.png', 'path': 'resources/12_sk.png'},
    {'name': 'resources/2_fl.png', 'path': 'resources/2_fl.png'},
    {'name': 'resources/32_fl.png', 'path': 'resources/32_fl.png'},
    {'name': 'resources/21_fl.png', 'path': 'resources/21_fl.png'},
    {'name': 'resources/20_fl.png', 'path': 'resources/20_fl.png'},
    {'name': 'resources/9_fl.png', 'path': 'resources/9_fl.png'},
    {'name': 'resources/27_fl.png', 'path': 'resources/27_fl.png'},
    {'name': 'resources/38_fl.png', 'path': 'resources/38_fl.png'},
    {'name': 'resources/18_fl.png', 'path': 'resources/18_fl.png'},
    {'name': 'resources/31_fl.png', 'path': 'resources/31_fl.png'},
    {'name': 'resources/19_fl.png', 'path': 'resources/19_fl.png'},
    {'name': 'resources/8_fl.png', 'path': 'resources/8_fl.png'},
    {'name': 'resources/25_fl.png', 'path': 'resources/25_fl.png'},
    {'name': 'resources/26_fl.png', 'path': 'resources/26_fl.png'},
    {'name': 'resources/4_fl.png', 'path': 'resources/4_fl.png'},
    {'name': 'resources/5_fl.png', 'path': 'resources/5_fl.png'},
    {'name': 'resources/23_fl.png', 'path': 'resources/23_fl.png'},
    {'name': 'resources/14_fl.png', 'path': 'resources/14_fl.png'},
    {'name': 'resources/28_fl.png', 'path': 'resources/28_fl.png'},
    {'name': 'resources/11_fl.png', 'path': 'resources/11_fl.png'},
    {'name': 'resources/33_fl.png', 'path': 'resources/33_fl.png'},
    {'name': 'resources/34_fl.png', 'path': 'resources/34_fl.png'},
    {'name': 'resources/24_fl.png', 'path': 'resources/24_fl.png'},
    {'name': 'resources/22_fl.png', 'path': 'resources/22_fl.png'},
    {'name': 'resources/6_fl.png', 'path': 'resources/6_fl.png'},
    {'name': 'resources/29_fl.png', 'path': 'resources/29_fl.png'},
    {'name': 'resources/7_fl.png', 'path': 'resources/7_fl.png'},
    {'name': 'resources/35_fl.png', 'path': 'resources/35_fl.png'},
    {'name': 'resources/36_fl.png', 'path': 'resources/36_fl.png'},
    {'name': 'resources/1_fl.png', 'path': 'resources/1_fl.png'},
    {'name': 'resources/1.png', 'path': 'resources/1.png'},
    {'name': 'resources/3_fl.png', 'path': 'resources/3_fl.png'},
    {'name': 'resources/15_fl.png', 'path': 'resources/15_fl.png'},
    {'name': 'resources/39_fl.png', 'path': 'resources/39_fl.png'},
    {'name': 'resources/17_fl.png', 'path': 'resources/17_fl.png'},
    {'name': 'resources/16_fl.png', 'path': 'resources/16_fl.png'},
    {'name': 'resources/40_fl.png', 'path': 'resources/40_fl.png'},
    {'name': 'resources/30_fl.png', 'path': 'resources/30_fl.png'},
    {'name': 'resources/37_fl.png', 'path': 'resources/37_fl.png'},
    {'name': 'resources/10_fl.png', 'path': 'resources/10_fl.png'},
    {'name': 'resources/13_fl.png', 'path': 'resources/13_fl.png'},
    {'name': 'resources/12_fl.png', 'path': 'resources/12_fl.png'},
    {'name': 'resources/2_neu.png', 'path': 'resources/2_neu.png'},
    {'name': 'resources/18_neu.png', 'path': 'resources/18_neu.png'},
    {'name': 'resources/38_neu.png', 'path': 'resources/38_neu.png'},
    {'name': 'resources/27_neu.png', 'path': 'resources/27_neu.png'},
    {'name': 'resources/9_neu.png', 'path': 'resources/9_neu.png'},
    {'name': 'resources/20_neu.png', 'path': 'resources/20_neu.png'},
    {'name': 'resources/21_neu.png', 'path': 'resources/21_neu.png'},
    {'name': 'resources/32_neu.png', 'path': 'resources/32_neu.png'},
    {'name': 'resources/36_neu.png', 'path': 'resources/36_neu.png'},
    {'name': 'resources/1_neu.png', 'path': 'resources/1_neu.png'},
    {'name': 'resources/3_neu.png', 'path': 'resources/3_neu.png'},
    {'name': 'resources/15_neu.png', 'path': 'resources/15_neu.png'},
    {'name': 'resources/39_neu.png', 'path': 'resources/39_neu.png'},
    {'name': 'resources/17_neu.png', 'path': 'resources/17_neu.png'},
    {'name': 'resources/16_neu.png', 'path': 'resources/16_neu.png'},
    {'name': 'resources/40_neu.png', 'path': 'resources/40_neu.png'},
    {'name': 'resources/37_neu.png', 'path': 'resources/37_neu.png'},
    {'name': 'resources/30_neu.png', 'path': 'resources/30_neu.png'},
    {'name': 'resources/10_neu.png', 'path': 'resources/10_neu.png'},
    {'name': 'resources/13_neu.png', 'path': 'resources/13_neu.png'},
    {'name': 'resources/12_neu.png', 'path': 'resources/12_neu.png'},
    {'name': 'resources/33_neu.png', 'path': 'resources/33_neu.png'},
    {'name': 'resources/14_neu.png', 'path': 'resources/14_neu.png'},
    {'name': 'resources/34_neu.png', 'path': 'resources/34_neu.png'},
    {'name': 'resources/24_neu.png', 'path': 'resources/24_neu.png'},
    {'name': 'resources/22_neu.png', 'path': 'resources/22_neu.png'},
    {'name': 'resources/6_neu.png', 'path': 'resources/6_neu.png'},
    {'name': 'resources/29_neu.png', 'path': 'resources/29_neu.png'},
    {'name': 'resources/7_neu.png', 'path': 'resources/7_neu.png'},
    {'name': 'resources/35_neu.png', 'path': 'resources/35_neu.png'},
    {'name': 'resources/11_neu.png', 'path': 'resources/11_neu.png'},
    {'name': 'resources/28_neu.png', 'path': 'resources/28_neu.png'},
    {'name': 'resources/23_neu.png', 'path': 'resources/23_neu.png'},
    {'name': 'resources/5_neu.png', 'path': 'resources/5_neu.png'},
    {'name': 'resources/4_neu.png', 'path': 'resources/4_neu.png'},
    {'name': 'resources/26_neu.png', 'path': 'resources/26_neu.png'},
    {'name': 'resources/25_neu.png', 'path': 'resources/25_neu.png'},
    {'name': 'resources/8_neu.png', 'path': 'resources/8_neu.png'},
    {'name': 'resources/19_neu.png', 'path': 'resources/19_neu.png'},
    {'name': 'resources/31_neu.png', 'path': 'resources/31_neu.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["\u0418\u043c\u044f_\u0424\u0430\u043c\u0438\u043b\u0438\u044f"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var welcome_instrClock;
var text;
var go_train_instr;
var test_instrClock;
var test_text;
var gototest;
var test_search_taskClock;
var design;
var group_sk_fl_neu;
var names;
var istest;
var isfav;
var isfreq;
var descr_dic;
var train_test_ind_seq;
var train_order;
var train_matrix_seq;
var size_pix;
var positions_3x3;
var positions_4x4;
var positions_5x5;
var test_ind_seq;
var tested_ids_fav;
var tested_ids_nofav;
var test_order_1;
var test_order_2;
var test_order_3;
var test_order_4;
var test_order_5;
var test_order_6;
var test_order;
var matrix_seq;
var test_search_text;
var test_go_search;
var test_space_instr;
var test_trialClock;
var test_target;
var test_distr_1;
var test_distr_2;
var test_distr_3;
var test_distr_4;
var test_distr_5;
var test_distr_6;
var test_distr_7;
var test_distr_8;
var test_chose_targ;
var feedbackClock;
var feedback_text;
var main_instrClock;
var main_text;
var gomain;
var main_search_taskClock;
var main_search_text;
var main_go_search;
var space_instr;
var main_trialClock;
var target;
var distr_1;
var distr_2;
var distr_3;
var distr_4;
var distr_5;
var distr_6;
var distr_7;
var distr_8;
var distr_9;
var distr_10;
var distr_11;
var distr_12;
var distr_13;
var distr_14;
var distr_15;
var distr_16;
var distr_17;
var distr_18;
var distr_19;
var distr_20;
var distr_21;
var distr_22;
var distr_23;
var distr_24;
var chose_targ;
var outroClock;
var text_2;
var end_space;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcome_instr"
  welcome_instrClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Спасибо, что согласились пройти наш эксперимент по исследованию восприятия цифровых интерфейсов.\n\nПожалуйста, внимательно ознакомьтесь с инструкциями, прежде чем приступать к эксперименту.\n\nВ ходе эксперимента вам необходимо будет искать приложения, с описанным функционалом среди иконок других приложений.\n\nЧтобы перейти к дальнейшим инструкциям, нажмите пробел.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 40.0,  wrapWidth: 1400.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  go_train_instr = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "test_instr"
  test_instrClock = new util.Clock();
  test_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'test_text',
    text: 'Для ознакомления с процедурой эксперимента, мы предлагаем вам пройти серию тренировочных проб.\n\nСначала перед вами появится текстовое описание приложения, которое необходимо найти. Оно будет начинаться со слов "Я бы хотел...". \n\nДалее вам предстоит найти иконку описанного приложения среди нескольких представленных иконок. Как только вы найдете нужную иконку, просто выберете её кликом левой кнопки мыши.\n\nКак только вы выберете иконку, вы узнаете корректность вашего ответа.\n\nПостарайтесь отвечать как можно точнее и быстрее.\n\nДля перехода к тренировочным пробам нажмите пробел.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 40.0,  wrapWidth: 1400.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  gototest = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "test_search_task"
  test_search_taskClock = new util.Clock();
  // Run 'Begin Experiment' code from test_code
  
  
  
  //Дизайн
  design = ("_" + expInfo["group_sk_fl_neu"]);
  group_sk_fl_neu = expInfo["group_sk_fl_neu"];
  
  //Подгрузить файл с данными стимулов
  names = {
      1: 'air', 2: 'antimalware', 3: 'bank', 4: 'book', 5: 'browser', 6: 'calculator', 7: 'calendar', 8: 'camera', 9: 'cancel', 10: 'compass', 11: 'contacts', 12: 'dictaphone', 13: 'documents', 14: 'download', 15: 'editor', 16: 'email', 17: 'files', 18: 'flashlight', 19: 'gallery', 20: 'home', 21: 'like', 22: 'maps', 23: 'messager', 24: 'metro', 25: 'music', 26: 'notebook', 27: 'notification', 28: 'phone', 29: 'planner', 30: 'ruler', 31: 'settings', 32: 'star', 33: 'store', 34: 'taxi', 35: 'time', 36: 'train', 37: 'translator', 38: 'video', 39: 'wallet', 40: 'weather'
  };
  istest = {
      1: 1, 2: 0, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1, 9: 0, 10: 1, 11: 1, 12: 1, 13: 1, 14: 1, 15: 1, 16: 1, 17: 1, 18: 0, 19: 1, 20: 0, 21: 0, 22: 1, 23: 1, 24: 1, 25: 1, 26: 1, 27: 0, 28: 1, 29: 1, 30: 1, 31: 1, 32: 0, 33: 1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 0, 39: 1, 40: 1
  };
  isfav = {
      1: 0, 2: 'NA', 3: 0, 4: 0, 5: 0, 6: 1, 7: 1, 8: 1, 9: 'NA', 10: 0, 11: 1, 12: 0, 13: 0, 14: 0, 15: 0, 16: 1, 17: 0, 18: 'NA', 19: 1, 20: 'NA', 21: 'NA', 22: 1, 23: 1, 24: 0, 25: 1, 26: 1, 27: 'NA', 28: 1, 29: 0, 30: 0, 31: 1, 32: 'NA', 33: 0, 34: 1, 35: 1, 36: 1, 37: 0, 38: 'NA', 39: 0, 40: 1
  };
  isfreq = {
      1: '0', 2: 'NA', 3: '1', 4: '0', 5: '1', 6: '1', 7: '1', 8: '1', 9: 'NA', 10: '0', 11: '0', 12: '0', 13: '0', 14: '0', 15: '0', 16: '1', 17: '1', 18: 'NA', 19: '1', 20: 'NA', 21: 'NA', 22: '1', 23: '1', 24: '0', 25: '1', 26: '0', 27: 'NA', 28: '1', 29: '0', 30: '0', 31: '1', 32: 'NA', 33: '0', 34: '0', 35: '1', 36: '0', 37: '1', 38: 'NA', 39: '0', 40: '1'
  };
  descr_dic = {
      1:'приобрести билеты на самолет',
  2:'проверить устройство на наличие вирусов',
  3:'узнать курс доллара и купить его',
  4:'почитать сохраненную книгу',
  5:'выйти в интернет',
  6:'разделить число на 3',
  7:'узнать на какой день недели выпадает мой день рождения',
  8:'сделать фотоснимок',
  9:'закрыть меню',
  10:'узнать, в какой стороне света Юг',
  11:'найти номер телефона коллеги',
  12:'записать свой голос',
  13:'открыть сохраненные офисные документы',
  14:'открыть скачанный файл',
  15:'отредактировать фото',
  16:'проверить электронную почту',
  17:'открыть файл, хранящийся на устройстве',
  18:'включить фонарик',
  19:'посмотреть сделанные фотографии',
  20:'вернуться на домашнюю страницу',
  21:'поставить лайк',
  22:'узнать, где находится ближайший продуктовый магазин',
  23:'отправить сообщение',
  24:'открыть схему линий метро',
  25:'послушать музыку',
  26:'сделать заметку',
  27:'включить уведомления',
  28:'сделать телефонный звонок',
  29:'создать маркированный список планов на день',
  30:'измерить длину предмета',
  31:'изменить настройки устройства',
  32:'открыть избранные вкладки',
  33:'совершить заказ в продуктовом магазине',
  34:'заказать такси',
  35:'посмотреть, сколько времени во Владивостоке',
  36:'приобрести билеты на поезд',
  37:'перевести текст',
  38:'посмотреть сохраненные видео',
  39:'посмотреть свои скидочные и дебетовые карты',
  40:'узнать погоду на завтра'
  };
  
  //Генереация айди проб теста
  train_test_ind_seq = 0;
  
  //выбор имен стимулов для всех проб
  train_order = [18, 21, 38];
  
  //Тип матрицы
  train_matrix_seq = [1,1,1];
  
  //размер иконок в экспе
  size_pix = ifelse(group_sk_fl_neu !== 'neu', [0.1037, 0.1037],[0.13889, 0.13889]);
  
  // List of positions for 3x3 images
  positions_3x3 = [];
  for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
          positions_3x3.push([-0.19167 + i * 0.19167, -0.19167 + j * 0.19167]);
      }
  }
  
  // List of positions for 4x4 images
  positions_4x4 = [];
  for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
          positions_4x4.push([-0.28611 + i * 0.19167, -0.28611 + j * 0.19167]);
      }
  }
  
  // List of positions for 5x5 images
  positions_5x5 = [];
  for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
          positions_5x5.push([-0.38148 + i * 0.19167, -0.38148 + j * 0.19167]);
      }
  }
  
  //Генереация айди проб
  test_ind_seq = Array.apply(null, {length: 90}).map(Number.call, Number);
  
  //Две группы стимулов
  tested_ids_fav = [6, 7, 8, 11, 16, 19, 22, 23, 25, 26, 28, 31, 34, 35, 36, 40];
  tested_ids_nofav = [1, 3, 4, 5, 10, 12, 13, 14, 15, 17, 24, 29, 30, 33,  37, 39];
  
  //выбор имен стимулов для всех проб
  test_order_1 = getRandomSubarray(tested_ids_fav, 15);
  test_order_2 = getRandomSubarray(tested_ids_nofav, 15);
  test_order_3 = getRandomSubarray(tested_ids_fav, 15);
  test_order_4 = getRandomSubarray(tested_ids_nofav, 15);
  test_order_5 = getRandomSubarray(tested_ids_fav, 15);
  test_order_6 = getRandomSubarray(tested_ids_nofav, 15);
  
  test_order = test_order_1.concat(test_order_2, test_order_3, test_order_4, test_order_5, test_order_6);
  
  //тип матрицы
  matrix_seq = Array.apply(null, Array(30)).map(function(){return 1}).concat(Array.apply(null, Array(30)).map(function(){return 2}),Array.apply(null, Array(30)).map(function(){return 3}));
  
  
  test_search_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'test_search_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 150], height: 60.0,  wrapWidth: 1400.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  test_go_search = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  test_space_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'test_space_instr',
    text: 'Как только будете готовы начать, нажмите пробел.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 300)], height: 23.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "test_trial"
  test_trialClock = new util.Clock();
  test_target = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test_target', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1.0, 1.0, 1.0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  test_distr_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test_distr_1', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  test_distr_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test_distr_2', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  test_distr_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test_distr_3', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  test_distr_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test_distr_4', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  test_distr_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test_distr_5', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  test_distr_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test_distr_6', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  test_distr_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test_distr_7', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  test_distr_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'test_distr_8', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  test_chose_targ = new core.Mouse({
    win: psychoJS.window,
  });
  test_chose_targ.mouseClock = new util.Clock();
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: '',
    font: 'Arial',
    units: 'pix', 
    pos: [0, 0], height: 60.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "main_instr"
  main_instrClock = new util.Clock();
  main_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'main_text',
    text: 'Вы отлично справились с тренировочным заданием. \n\nТеперь вам предстоит решить серию подобных заданий, с тем лишь отличием, что обратная связь по корректности ответа предоставляться не будет. \n\nПостарайтесь давать максимально точный и быстрый ответ.\n\nПосле окончания эксперимента обязательно дождитесь появления зеленого индикатора. \n\nКак только вы будете готовы начать основную часть эксперимента, нажмите пробел.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 40.0,  wrapWidth: 1400.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  gomain = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "main_search_task"
  main_search_taskClock = new util.Clock();
  main_search_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'main_search_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 150], height: 60.0,  wrapWidth: 1400.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  main_go_search = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  space_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'space_instr',
    text: 'Как только будете готовы начать, нажмите пробел.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 300)], height: 23.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "main_trial"
  main_trialClock = new util.Clock();
  target = new visual.ImageStim({
    win : psychoJS.window,
    name : 'target', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1.0, 1.0, 1.0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  distr_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distr_1', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  distr_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distr_2', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  distr_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distr_3', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  distr_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distr_4', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  distr_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distr_5', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  distr_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distr_6', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  distr_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distr_7', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  distr_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distr_8', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  distr_9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distr_9', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  distr_10 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distr_10', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -11.0 
  });
  distr_11 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distr_11', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -12.0 
  });
  distr_12 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distr_12', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -13.0 
  });
  distr_13 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distr_13', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -14.0 
  });
  distr_14 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distr_14', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -15.0 
  });
  distr_15 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distr_15', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -16.0 
  });
  distr_16 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distr_16', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -17.0 
  });
  distr_17 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distr_17', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -18.0 
  });
  distr_18 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distr_18', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -19.0 
  });
  distr_19 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distr_19', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -20.0 
  });
  distr_20 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distr_20', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -21.0 
  });
  distr_21 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distr_21', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -22.0 
  });
  distr_22 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distr_22', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -23.0 
  });
  distr_23 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distr_23', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -24.0 
  });
  distr_24 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distr_24', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : size_pix,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -25.0 
  });
  chose_targ = new core.Mouse({
    win: psychoJS.window,
  });
  chose_targ.mouseClock = new util.Clock();
  // Initialize components for Routine "outro"
  outroClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Спасибо за участие в эксперименте!\nЕсли у вас есть вопросы по поводу нашего эксперимента, обратитесь к экспериментатору, он с радостью на них ответит и выслушает вашу обратную связь.\n\nДля окончания эксперимента нажмите пробел и ОБЯЗАТЕЛЬНО дождитесь зеленого индикатора, прежде чем закрывать страницу.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 40.0,  wrapWidth: 1400.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_space = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _go_train_instr_allKeys;
var welcome_instrComponents;
function welcome_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome_instr' ---
    t = 0;
    welcome_instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    go_train_instr.keys = undefined;
    go_train_instr.rt = undefined;
    _go_train_instr_allKeys = [];
    // keep track of which components have finished
    welcome_instrComponents = [];
    welcome_instrComponents.push(text);
    welcome_instrComponents.push(go_train_instr);
    
    welcome_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function welcome_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome_instr' ---
    // get current time
    t = welcome_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *go_train_instr* updates
    if (t >= 0.0 && go_train_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      go_train_instr.tStart = t;  // (not accounting for frame time here)
      go_train_instr.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { go_train_instr.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { go_train_instr.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { go_train_instr.clearEvents(); });
    }
    
    if (go_train_instr.status === PsychoJS.Status.STARTED) {
      let theseKeys = go_train_instr.getKeys({keyList: ['space'], waitRelease: false});
      _go_train_instr_allKeys = _go_train_instr_allKeys.concat(theseKeys);
      if (_go_train_instr_allKeys.length > 0) {
        go_train_instr.keys = _go_train_instr_allKeys[_go_train_instr_allKeys.length - 1].name;  // just the last key pressed
        go_train_instr.rt = _go_train_instr_allKeys[_go_train_instr_allKeys.length - 1].rt;
        go_train_instr.duration = _go_train_instr_allKeys[_go_train_instr_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    welcome_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcome_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome_instr' ---
    welcome_instrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    go_train_instr.stop();
    // the Routine "welcome_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _gototest_allKeys;
var test_instrComponents;
function test_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'test_instr' ---
    t = 0;
    test_instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    gototest.keys = undefined;
    gototest.rt = undefined;
    _gototest_allKeys = [];
    // keep track of which components have finished
    test_instrComponents = [];
    test_instrComponents.push(test_text);
    test_instrComponents.push(gototest);
    
    test_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function test_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'test_instr' ---
    // get current time
    t = test_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *test_text* updates
    if (t >= 0.0 && test_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_text.tStart = t;  // (not accounting for frame time here)
      test_text.frameNStart = frameN;  // exact frame index
      
      test_text.setAutoDraw(true);
    }
    
    
    // *gototest* updates
    if (t >= 0.0 && gototest.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gototest.tStart = t;  // (not accounting for frame time here)
      gototest.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { gototest.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { gototest.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { gototest.clearEvents(); });
    }
    
    if (gototest.status === PsychoJS.Status.STARTED) {
      let theseKeys = gototest.getKeys({keyList: ['space'], waitRelease: false});
      _gototest_allKeys = _gototest_allKeys.concat(theseKeys);
      if (_gototest_allKeys.length > 0) {
        gototest.keys = _gototest_allKeys[_gototest_allKeys.length - 1].name;  // just the last key pressed
        gototest.rt = _gototest_allKeys[_gototest_allKeys.length - 1].rt;
        gototest.duration = _gototest_allKeys[_gototest_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    test_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function test_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'test_instr' ---
    test_instrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    gototest.stop();
    // the Routine "test_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var test_loop;
function test_loopLoopBegin(test_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    test_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'test_loop'
    });
    psychoJS.experiment.addLoop(test_loop); // add the loop to the experiment
    currentLoop = test_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    test_loop.forEach(function() {
      snapshot = test_loop.getSnapshot();
    
      test_loopLoopScheduler.add(importConditions(snapshot));
      test_loopLoopScheduler.add(test_search_taskRoutineBegin(snapshot));
      test_loopLoopScheduler.add(test_search_taskRoutineEachFrame());
      test_loopLoopScheduler.add(test_search_taskRoutineEnd(snapshot));
      test_loopLoopScheduler.add(test_trialRoutineBegin(snapshot));
      test_loopLoopScheduler.add(test_trialRoutineEachFrame());
      test_loopLoopScheduler.add(test_trialRoutineEnd(snapshot));
      test_loopLoopScheduler.add(feedbackRoutineBegin(snapshot));
      test_loopLoopScheduler.add(feedbackRoutineEachFrame());
      test_loopLoopScheduler.add(feedbackRoutineEnd(snapshot));
      test_loopLoopScheduler.add(test_loopLoopEndIteration(test_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function test_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(test_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function test_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var main_loop;
function main_loopLoopBegin(main_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    main_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 90, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'main_loop'
    });
    psychoJS.experiment.addLoop(main_loop); // add the loop to the experiment
    currentLoop = main_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    main_loop.forEach(function() {
      snapshot = main_loop.getSnapshot();
    
      main_loopLoopScheduler.add(importConditions(snapshot));
      main_loopLoopScheduler.add(main_search_taskRoutineBegin(snapshot));
      main_loopLoopScheduler.add(main_search_taskRoutineEachFrame());
      main_loopLoopScheduler.add(main_search_taskRoutineEnd(snapshot));
      main_loopLoopScheduler.add(main_trialRoutineBegin(snapshot));
      main_loopLoopScheduler.add(main_trialRoutineEachFrame());
      main_loopLoopScheduler.add(main_trialRoutineEnd(snapshot));
      main_loopLoopScheduler.add(main_loopLoopEndIteration(main_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function main_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(main_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function main_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var test;
var matrix_type;
var instruction;
var _test_go_search_allKeys;
var test_search_taskComponents;
function test_search_taskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'test_search_task' ---
    t = 0;
    test_search_taskClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from test_code
    test = train_order[train_test_ind_seq];
    matrix_type = train_matrix_seq[train_test_ind_seq];
    instruction = descr_dic[test];
    
    test_search_text.setText(("\u042f \u0431\u044b \u0445\u043e\u0442\u0435\u043b ...\n\n" + instruction));
    test_go_search.keys = undefined;
    test_go_search.rt = undefined;
    _test_go_search_allKeys = [];
    // keep track of which components have finished
    test_search_taskComponents = [];
    test_search_taskComponents.push(test_search_text);
    test_search_taskComponents.push(test_go_search);
    test_search_taskComponents.push(test_space_instr);
    
    test_search_taskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function test_search_taskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'test_search_task' ---
    // get current time
    t = test_search_taskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *test_search_text* updates
    if (t >= 0.0 && test_search_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_search_text.tStart = t;  // (not accounting for frame time here)
      test_search_text.frameNStart = frameN;  // exact frame index
      
      test_search_text.setAutoDraw(true);
    }
    
    
    // *test_go_search* updates
    if (t >= 0.0 && test_go_search.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_go_search.tStart = t;  // (not accounting for frame time here)
      test_go_search.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { test_go_search.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { test_go_search.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { test_go_search.clearEvents(); });
    }
    
    if (test_go_search.status === PsychoJS.Status.STARTED) {
      let theseKeys = test_go_search.getKeys({keyList: ['space'], waitRelease: false});
      _test_go_search_allKeys = _test_go_search_allKeys.concat(theseKeys);
      if (_test_go_search_allKeys.length > 0) {
        test_go_search.keys = _test_go_search_allKeys[_test_go_search_allKeys.length - 1].name;  // just the last key pressed
        test_go_search.rt = _test_go_search_allKeys[_test_go_search_allKeys.length - 1].rt;
        test_go_search.duration = _test_go_search_allKeys[_test_go_search_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *test_space_instr* updates
    if (t >= 0.0 && test_space_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_space_instr.tStart = t;  // (not accounting for frame time here)
      test_space_instr.frameNStart = frameN;  // exact frame index
      
      test_space_instr.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    test_search_taskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function test_search_taskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'test_search_task' ---
    test_search_taskComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    test_go_search.stop();
    // the Routine "test_search_task" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var probe_list;
var index;
var matrix_positions;
var dist_list;
var test_position;
var dist_position;
var target_image;
var distr1_image;
var distr2_image;
var distr3_image;
var distr4_image;
var distr5_image;
var distr6_image;
var distr7_image;
var distr8_image;
var gotValidClick;
var test_trialComponents;
function test_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'test_trial' ---
    t = 0;
    test_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from test_code_trial
    //Генерируем список дистракторов из всех стимулов
    probe_list = [2,9,18,20,21,27,32,38];
    
    index = probe_list.indexOf(test);
    probe_list.splice(index, 1);
    
    probe_list.push(probe_list[Math.floor(Math.random()*probe_list.length)]);
    
    //выбираем тип матрицыv и номера дистракторов
    matrix_positions = positions_3x3;
    dist_list = getRandomSubarray(probe_list, 8);
    
    //Выбираем позицию для целевого стимула
    test_position = choose(matrix_positions);
    
    //Выбираем оставляем позиции для дистракторов
    dist_position = matrix_positions.slice(0);
    
    index = dist_position.indexOf(test_position);
    dist_position.splice(index, 1);
    
    //размеры и файлы
    target_image= 'resources/'+ test.toString() +design+'.png';
    distr1_image= 'resources/'+ dist_list[0].toString() +design+'.png';
    distr2_image= 'resources/'+ dist_list[1].toString() +design+'.png';
    distr3_image= 'resources/'+ dist_list[2].toString() +design+'.png';
    distr4_image= 'resources/'+ dist_list[3].toString() +design+'.png';
    distr5_image= 'resources/'+ dist_list[4].toString() +design+'.png';
    distr6_image= 'resources/'+ dist_list[5].toString() +design+'.png';
    distr7_image= 'resources/'+ dist_list[6].toString() +design+'.png';
    distr8_image= 'resources/'+ dist_list[7].toString() +design+'.png';
    
    
    test_target.setPos([test_position[0], test_position[1]]);
    test_target.setImage(target_image);
    test_distr_1.setPos([dist_position[0][0], dist_position[0][1]]);
    test_distr_1.setImage(distr1_image);
    test_distr_2.setPos([dist_position[1][0], dist_position[1][1]]);
    test_distr_2.setImage(distr2_image);
    test_distr_3.setPos([dist_position[2][0], dist_position[2][1]]);
    test_distr_3.setImage(distr3_image);
    test_distr_4.setPos([dist_position[3][0], dist_position[3][1]]);
    test_distr_4.setImage(distr4_image);
    test_distr_5.setPos([dist_position[4][0], dist_position[4][1]]);
    test_distr_5.setImage(distr5_image);
    test_distr_6.setPos([dist_position[5][0], dist_position[5][1]]);
    test_distr_6.setImage(distr6_image);
    test_distr_7.setPos([dist_position[6][0], dist_position[6][1]]);
    test_distr_7.setImage(distr7_image);
    test_distr_8.setPos([dist_position[7][0], dist_position[7][1]]);
    test_distr_8.setImage(distr8_image);
    // setup some python lists for storing info about the test_chose_targ
    // current position of the mouse:
    test_chose_targ.x = [];
    test_chose_targ.y = [];
    test_chose_targ.leftButton = [];
    test_chose_targ.midButton = [];
    test_chose_targ.rightButton = [];
    test_chose_targ.time = [];
    test_chose_targ.corr = [];
    test_chose_targ.clicked_name = [];
    test_chose_targ.clicked_pos = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    test_trialComponents = [];
    test_trialComponents.push(test_target);
    test_trialComponents.push(test_distr_1);
    test_trialComponents.push(test_distr_2);
    test_trialComponents.push(test_distr_3);
    test_trialComponents.push(test_distr_4);
    test_trialComponents.push(test_distr_5);
    test_trialComponents.push(test_distr_6);
    test_trialComponents.push(test_distr_7);
    test_trialComponents.push(test_distr_8);
    test_trialComponents.push(test_chose_targ);
    
    test_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var corr;
var corrAns;
var _mouseXYs;
function test_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'test_trial' ---
    // get current time
    t = test_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *test_target* updates
    if (t >= 0.0 && test_target.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_target.tStart = t;  // (not accounting for frame time here)
      test_target.frameNStart = frameN;  // exact frame index
      
      test_target.setAutoDraw(true);
    }
    
    
    // *test_distr_1* updates
    if (((matrix_type >= 1)) && test_distr_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_distr_1.tStart = t;  // (not accounting for frame time here)
      test_distr_1.frameNStart = frameN;  // exact frame index
      
      test_distr_1.setAutoDraw(true);
    }
    
    
    // *test_distr_2* updates
    if (((matrix_type >= 1)) && test_distr_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_distr_2.tStart = t;  // (not accounting for frame time here)
      test_distr_2.frameNStart = frameN;  // exact frame index
      
      test_distr_2.setAutoDraw(true);
    }
    
    
    // *test_distr_3* updates
    if (((matrix_type >= 1)) && test_distr_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_distr_3.tStart = t;  // (not accounting for frame time here)
      test_distr_3.frameNStart = frameN;  // exact frame index
      
      test_distr_3.setAutoDraw(true);
    }
    
    
    // *test_distr_4* updates
    if (((matrix_type >= 1)) && test_distr_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_distr_4.tStart = t;  // (not accounting for frame time here)
      test_distr_4.frameNStart = frameN;  // exact frame index
      
      test_distr_4.setAutoDraw(true);
    }
    
    
    // *test_distr_5* updates
    if (((matrix_type >= 1)) && test_distr_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_distr_5.tStart = t;  // (not accounting for frame time here)
      test_distr_5.frameNStart = frameN;  // exact frame index
      
      test_distr_5.setAutoDraw(true);
    }
    
    
    // *test_distr_6* updates
    if (((matrix_type >= 1)) && test_distr_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_distr_6.tStart = t;  // (not accounting for frame time here)
      test_distr_6.frameNStart = frameN;  // exact frame index
      
      test_distr_6.setAutoDraw(true);
    }
    
    
    // *test_distr_7* updates
    if (((matrix_type >= 1)) && test_distr_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_distr_7.tStart = t;  // (not accounting for frame time here)
      test_distr_7.frameNStart = frameN;  // exact frame index
      
      test_distr_7.setAutoDraw(true);
    }
    
    
    // *test_distr_8* updates
    if (((matrix_type >= 1)) && test_distr_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_distr_8.tStart = t;  // (not accounting for frame time here)
      test_distr_8.frameNStart = frameN;  // exact frame index
      
      test_distr_8.setAutoDraw(true);
    }
    
    // *test_chose_targ* updates
    if (t >= 0.0 && test_chose_targ.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_chose_targ.tStart = t;  // (not accounting for frame time here)
      test_chose_targ.frameNStart = frameN;  // exact frame index
      
      test_chose_targ.status = PsychoJS.Status.STARTED;
      test_chose_targ.mouseClock.reset();
      prevButtonState = test_chose_targ.getPressed();  // if button is down already this ISN'T a new click
      }
    if (test_chose_targ.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = test_chose_targ.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [test_target, test_distr_1, test_distr_2, test_distr_3, test_distr_4, test_distr_5, test_distr_6, test_distr_7, test_distr_8]) {
            if (obj.contains(test_chose_targ)) {
              gotValidClick = true;
              test_chose_targ.clicked_name.push(obj.name)
              test_chose_targ.clicked_pos.push(obj.pos)
            }
          }
          // check whether click was in correct object
          if (gotValidClick) {
              corr = 0;
              corrAns = test_target;
              for (let obj of [corrAns]) {
                  if (obj.contains(test_chose_targ)) {
                      corr = 1;
                  };
              };
              test_chose_targ.corr.push(corr);
          };
          if (gotValidClick === true) { 
            _mouseXYs = test_chose_targ.getPos();
            test_chose_targ.x.push(_mouseXYs[0]);
            test_chose_targ.y.push(_mouseXYs[1]);
            test_chose_targ.leftButton.push(_mouseButtons[0]);
            test_chose_targ.midButton.push(_mouseButtons[1]);
            test_chose_targ.rightButton.push(_mouseButtons[2]);
            test_chose_targ.time.push(test_chose_targ.mouseClock.getTime());
          }
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    test_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function test_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'test_trial' ---
    test_trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from test_code_trial
    
    train_test_ind_seq += 1;
    
    // store data for psychoJS.experiment (ExperimentHandler)
    if (test_chose_targ.x) {  psychoJS.experiment.addData('test_chose_targ.x', test_chose_targ.x[0])};
    if (test_chose_targ.y) {  psychoJS.experiment.addData('test_chose_targ.y', test_chose_targ.y[0])};
    if (test_chose_targ.leftButton) {  psychoJS.experiment.addData('test_chose_targ.leftButton', test_chose_targ.leftButton[0])};
    if (test_chose_targ.midButton) {  psychoJS.experiment.addData('test_chose_targ.midButton', test_chose_targ.midButton[0])};
    if (test_chose_targ.rightButton) {  psychoJS.experiment.addData('test_chose_targ.rightButton', test_chose_targ.rightButton[0])};
    if (test_chose_targ.time) {  psychoJS.experiment.addData('test_chose_targ.time', test_chose_targ.time[0])};
    if (test_chose_targ.corr) {  psychoJS.experiment.addData('test_chose_targ.corr', test_chose_targ.corr[0])};
    if (test_chose_targ.clicked_name) {  psychoJS.experiment.addData('test_chose_targ.clicked_name', test_chose_targ.clicked_name[0])};
    if (test_chose_targ.clicked_pos) {  psychoJS.experiment.addData('test_chose_targ.clicked_pos', test_chose_targ.clicked_pos[0])};
    
    // the Routine "test_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedback_str;
var feedback_colour;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback' ---
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.200000);
    // update component parameters for each repeat
    feedback_str = ifelse((test_chose_targ.clicked_name[0] == "test_target"), 'Верно', 'Неверно');
    feedback_colour = ifelse((test_chose_targ.clicked_name[0] == "test_target"), [-1.0000, 0.6784, -1.0000], [1.0000, -1.0000, -1.0000]);
    feedback_text.setColor(new util.Color(feedback_colour));
    feedback_text.setText(feedback_str);
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(feedback_text);
    
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback' ---
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_text* updates
    if (t >= 0.0 && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text.tStart = t;  // (not accounting for frame time here)
      feedback_text.frameNStart = frameN;  // exact frame index
      
      feedback_text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback' ---
    feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _gomain_allKeys;
var main_instrComponents;
function main_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'main_instr' ---
    t = 0;
    main_instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    gomain.keys = undefined;
    gomain.rt = undefined;
    _gomain_allKeys = [];
    // keep track of which components have finished
    main_instrComponents = [];
    main_instrComponents.push(main_text);
    main_instrComponents.push(gomain);
    
    main_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function main_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'main_instr' ---
    // get current time
    t = main_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *main_text* updates
    if (t >= 0.0 && main_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      main_text.tStart = t;  // (not accounting for frame time here)
      main_text.frameNStart = frameN;  // exact frame index
      
      main_text.setAutoDraw(true);
    }
    
    
    // *gomain* updates
    if (t >= 0.0 && gomain.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gomain.tStart = t;  // (not accounting for frame time here)
      gomain.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { gomain.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { gomain.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { gomain.clearEvents(); });
    }
    
    if (gomain.status === PsychoJS.Status.STARTED) {
      let theseKeys = gomain.getKeys({keyList: ['space'], waitRelease: false});
      _gomain_allKeys = _gomain_allKeys.concat(theseKeys);
      if (_gomain_allKeys.length > 0) {
        gomain.keys = _gomain_allKeys[_gomain_allKeys.length - 1].name;  // just the last key pressed
        gomain.rt = _gomain_allKeys[_gomain_allKeys.length - 1].rt;
        gomain.duration = _gomain_allKeys[_gomain_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    main_instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function main_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'main_instr' ---
    main_instrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    gomain.stop();
    // the Routine "main_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var test_ind;
var _main_go_search_allKeys;
var main_search_taskComponents;
function main_search_taskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'main_search_task' ---
    t = 0;
    main_search_taskClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code1
    test_ind = choose(test_ind_seq);
    test = test_order[test_ind];
    matrix_type = matrix_seq[test_ind];
    instruction = descr_dic[test];
    
    main_search_text.setText(("\u042f \u0431\u044b \u0445\u043e\u0442\u0435\u043b ...\n\n" + instruction));
    main_go_search.keys = undefined;
    main_go_search.rt = undefined;
    _main_go_search_allKeys = [];
    // keep track of which components have finished
    main_search_taskComponents = [];
    main_search_taskComponents.push(main_search_text);
    main_search_taskComponents.push(main_go_search);
    main_search_taskComponents.push(space_instr);
    
    main_search_taskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function main_search_taskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'main_search_task' ---
    // get current time
    t = main_search_taskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *main_search_text* updates
    if (t >= 0.0 && main_search_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      main_search_text.tStart = t;  // (not accounting for frame time here)
      main_search_text.frameNStart = frameN;  // exact frame index
      
      main_search_text.setAutoDraw(true);
    }
    
    
    // *main_go_search* updates
    if (t >= 0.0 && main_go_search.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      main_go_search.tStart = t;  // (not accounting for frame time here)
      main_go_search.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { main_go_search.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { main_go_search.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { main_go_search.clearEvents(); });
    }
    
    if (main_go_search.status === PsychoJS.Status.STARTED) {
      let theseKeys = main_go_search.getKeys({keyList: ['space'], waitRelease: false});
      _main_go_search_allKeys = _main_go_search_allKeys.concat(theseKeys);
      if (_main_go_search_allKeys.length > 0) {
        main_go_search.keys = _main_go_search_allKeys[_main_go_search_allKeys.length - 1].name;  // just the last key pressed
        main_go_search.rt = _main_go_search_allKeys[_main_go_search_allKeys.length - 1].rt;
        main_go_search.duration = _main_go_search_allKeys[_main_go_search_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *space_instr* updates
    if (t >= 0.0 && space_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      space_instr.tStart = t;  // (not accounting for frame time here)
      space_instr.frameNStart = frameN;  // exact frame index
      
      space_instr.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    main_search_taskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function main_search_taskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'main_search_task' ---
    main_search_taskComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    main_go_search.stop();
    // the Routine "main_search_task" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var distr9_image;
var distr10_image;
var distr11_image;
var distr12_image;
var distr13_image;
var distr14_image;
var distr15_image;
var distr16_image;
var distr17_image;
var distr18_image;
var distr19_image;
var distr20_image;
var distr21_image;
var distr22_image;
var distr23_image;
var distr24_image;
var distr9_pos;
var distr10_pos;
var distr11_pos;
var distr12_pos;
var distr13_pos;
var distr14_pos;
var distr15_pos;
var distr16_pos;
var distr17_pos;
var distr18_pos;
var distr19_pos;
var distr20_pos;
var distr21_pos;
var distr22_pos;
var distr23_pos;
var distr24_pos;
var main_trialComponents;
function main_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'main_trial' ---
    t = 0;
    main_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_main
    probe_list = Array.from({ length: 40 }, (_, i) => i + 1);
    probe_list.splice(probe_list.indexOf(test), 1);
    
    if (matrix_type == 1) {
        matrix_positions = positions_3x3;
        dist_list = getRandomSubarray(probe_list, 8);
    } 
    else if (matrix_type == 2) {
            matrix_positions = positions_4x4;
            dist_list = getRandomSubarray(probe_list, 15);
    }
    else {
            matrix_positions = positions_5x5;
            dist_list = getRandomSubarray(probe_list, 24);
    }
    
    test_position = choose(matrix_positions);
    dist_position = matrix_positions.slice(0);
    
    dist_position.splice(dist_position.indexOf(test_position), 1);
    
    target_image= 'resources/'+test.toString() +design+'.png';
    distr1_image= 'resources/'+ dist_list[0].toString() +design+'.png';
    distr2_image= 'resources/'+ dist_list[1].toString() +design+'.png';
    distr3_image= 'resources/'+ dist_list[2].toString() +design+'.png';
    distr4_image= 'resources/'+ dist_list[3].toString() +design+'.png';
    distr5_image= 'resources/'+ dist_list[4].toString() +design+'.png';
    distr6_image= 'resources/'+ dist_list[5].toString() +design+'.png';
    distr7_image= 'resources/'+ dist_list[6].toString() +design+'.png';
    distr8_image= 'resources/'+ dist_list[7].toString() +design+'.png';
    
    if (matrix_type >= 2) {
        distr9_image= 'resources/'+ dist_list[8].toString() +design+'.png';
        distr10_image= 'resources/'+ dist_list[9].toString() +design+'.png';
        distr11_image= 'resources/'+ dist_list[10].toString() +design+'.png';
        distr12_image= 'resources/'+ dist_list[11].toString() +design+'.png';
        distr13_image= 'resources/'+ dist_list[12].toString() +design+'.png';
        distr14_image= 'resources/'+ dist_list[13].toString() +design+'.png';
        distr15_image= 'resources/'+ dist_list[14].toString() +design+'.png';
    }
    else {
        distr9_image= 'resources/1.png';
        distr10_image= 'resources/1.png';
        distr11_image= 'resources/1.png';
        distr12_image= 'resources/1.png';
        distr13_image= 'resources/1.png';
        distr14_image= 'resources/1.png';
        distr15_image= 'resources/1.png';
    }
    
    if (matrix_type >=3){
        distr16_image= 'resources/'+ dist_list[15].toString() +design+'.png';
        distr17_image= 'resources/'+ dist_list[16].toString() +design+'.png';
        distr18_image= 'resources/'+ dist_list[17].toString() +design+'.png';
        distr19_image= 'resources/'+ dist_list[18].toString() +design+'.png';
        distr20_image= 'resources/'+ dist_list[19].toString() +design+'.png';
        distr21_image= 'resources/'+ dist_list[20].toString() +design+'.png';
        distr22_image= 'resources/'+ dist_list[21].toString() +design+'.png';
        distr23_image= 'resources/'+ dist_list[22].toString() +design+'.png';
        distr24_image= 'resources/'+ dist_list[23].toString() +design+'.png';
    }
    else {
        distr16_image= 'resources/1.png';
        distr17_image= 'resources/1.png';
        distr18_image= 'resources/1.png';
        distr19_image= 'resources/1.png';
        distr20_image= 'resources/1.png';
        distr21_image= 'resources/1.png';
        distr22_image= 'resources/1.png';
        distr23_image= 'resources/1.png';
        distr24_image= 'resources/1.png';
    }
    
    if (matrix_type >= 2) {
        distr9_pos =[dist_position[8][0], dist_position[8][1]];
        distr10_pos =[dist_position[9][0], dist_position[9][1]];
        distr11_pos =[dist_position[10][0], dist_position[10][1]];
        distr12_pos =[dist_position[11][0], dist_position[11][1]];
        distr13_pos =[dist_position[12][0], dist_position[12][1]];
        distr14_pos =[dist_position[13][0], dist_position[13][1]];
        distr15_pos =[dist_position[14][0], dist_position[14][1]];
    }
    else {
        distr9_pos = [-960, -540];
        distr10_pos = [-960, -540];
        distr11_pos = [-960, -540];
        distr12_pos = [-960, -540];
        distr13_pos = [-960, -540];
        distr14_pos = [-960, -540];
        distr15_pos = [-960, -540];
    }
    
    if (matrix_type >=3){
        distr16_pos = [dist_position[15][0], dist_position[15][1]];
        distr17_pos = [dist_position[16][0], dist_position[16][1]];
        distr18_pos = [dist_position[17][0], dist_position[17][1]];
        distr19_pos = [dist_position[18][0], dist_position[18][1]];
        distr20_pos = [dist_position[19][0], dist_position[19][1]];
        distr21_pos = [dist_position[20][0], dist_position[20][1]];
        distr22_pos = [dist_position[21][0], dist_position[21][1]];
        distr23_pos = [dist_position[22][0], dist_position[22][1]];
        distr24_pos = [dist_position[23][0], dist_position[23][1]];
    }
    else {
        distr16_pos= [-0.8,-0.5];
        distr17_pos= [-0.8,-0.5];
        distr18_pos= [-0.8,-0.5];
        distr19_pos= [-0.8,-0.5];
        distr20_pos= [-0.8,-0.5];
        distr21_pos= [-0.8,-0.5];
        distr22_pos= [-0.8,-0.5];
        distr23_pos= [-0.8,-0.5];
        distr24_pos= [-0.8,-0.5];
    }
    
    target.setPos([test_position[0], test_position[1]]);
    target.setImage(target_image);
    distr_1.setPos([dist_position[0][0], dist_position[0][1]]);
    distr_1.setImage(distr1_image);
    distr_2.setPos([dist_position[1][0], dist_position[1][1]]);
    distr_2.setImage(distr2_image);
    distr_3.setPos([dist_position[2][0], dist_position[2][1]]);
    distr_3.setImage(distr3_image);
    distr_4.setPos([dist_position[3][0], dist_position[3][1]]);
    distr_4.setImage(distr4_image);
    distr_5.setPos([dist_position[4][0], dist_position[4][1]]);
    distr_5.setImage(distr5_image);
    distr_6.setPos([dist_position[5][0], dist_position[5][1]]);
    distr_6.setImage(distr6_image);
    distr_7.setPos([dist_position[6][0], dist_position[6][1]]);
    distr_7.setImage(distr7_image);
    distr_8.setPos([dist_position[7][0], dist_position[7][1]]);
    distr_8.setImage(distr8_image);
    distr_9.setPos(distr9_pos);
    distr_9.setImage(distr9_image);
    distr_10.setPos(distr10_pos);
    distr_10.setImage(distr10_image);
    distr_11.setPos(distr11_pos);
    distr_11.setImage(distr11_image);
    distr_12.setPos(distr12_pos);
    distr_12.setImage(distr12_image);
    distr_13.setPos(distr13_pos);
    distr_13.setImage(distr13_image);
    distr_14.setPos(distr14_pos);
    distr_14.setImage(distr14_image);
    distr_15.setPos(distr15_pos);
    distr_15.setImage(distr15_image);
    distr_16.setPos(distr16_pos);
    distr_16.setImage(distr16_image);
    distr_17.setPos(distr17_pos);
    distr_17.setImage(distr17_image);
    distr_18.setPos(distr18_pos);
    distr_18.setImage(distr18_image);
    distr_19.setPos(distr19_pos);
    distr_19.setImage(distr19_image);
    distr_20.setPos(distr20_pos);
    distr_20.setImage(distr20_image);
    distr_21.setPos(distr21_pos);
    distr_21.setImage(distr21_image);
    distr_22.setPos(distr22_pos);
    distr_22.setImage(distr22_image);
    distr_23.setPos(distr23_pos);
    distr_23.setImage(distr23_image);
    distr_24.setPos(distr24_pos);
    distr_24.setImage(distr24_image);
    // setup some python lists for storing info about the chose_targ
    // current position of the mouse:
    chose_targ.x = [];
    chose_targ.y = [];
    chose_targ.leftButton = [];
    chose_targ.midButton = [];
    chose_targ.rightButton = [];
    chose_targ.time = [];
    chose_targ.corr = [];
    chose_targ.clicked_name = [];
    chose_targ.clicked_pos = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    main_trialComponents = [];
    main_trialComponents.push(target);
    main_trialComponents.push(distr_1);
    main_trialComponents.push(distr_2);
    main_trialComponents.push(distr_3);
    main_trialComponents.push(distr_4);
    main_trialComponents.push(distr_5);
    main_trialComponents.push(distr_6);
    main_trialComponents.push(distr_7);
    main_trialComponents.push(distr_8);
    main_trialComponents.push(distr_9);
    main_trialComponents.push(distr_10);
    main_trialComponents.push(distr_11);
    main_trialComponents.push(distr_12);
    main_trialComponents.push(distr_13);
    main_trialComponents.push(distr_14);
    main_trialComponents.push(distr_15);
    main_trialComponents.push(distr_16);
    main_trialComponents.push(distr_17);
    main_trialComponents.push(distr_18);
    main_trialComponents.push(distr_19);
    main_trialComponents.push(distr_20);
    main_trialComponents.push(distr_21);
    main_trialComponents.push(distr_22);
    main_trialComponents.push(distr_23);
    main_trialComponents.push(distr_24);
    main_trialComponents.push(chose_targ);
    
    main_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function main_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'main_trial' ---
    // get current time
    t = main_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *target* updates
    if (t >= 0.0 && target.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target.tStart = t;  // (not accounting for frame time here)
      target.frameNStart = frameN;  // exact frame index
      
      target.setAutoDraw(true);
    }
    
    
    // *distr_1* updates
    if (((matrix_type >= 1)) && distr_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distr_1.tStart = t;  // (not accounting for frame time here)
      distr_1.frameNStart = frameN;  // exact frame index
      
      distr_1.setAutoDraw(true);
    }
    
    
    // *distr_2* updates
    if (((matrix_type >= 1)) && distr_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distr_2.tStart = t;  // (not accounting for frame time here)
      distr_2.frameNStart = frameN;  // exact frame index
      
      distr_2.setAutoDraw(true);
    }
    
    
    // *distr_3* updates
    if (((matrix_type >= 1)) && distr_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distr_3.tStart = t;  // (not accounting for frame time here)
      distr_3.frameNStart = frameN;  // exact frame index
      
      distr_3.setAutoDraw(true);
    }
    
    
    // *distr_4* updates
    if (((matrix_type >= 1)) && distr_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distr_4.tStart = t;  // (not accounting for frame time here)
      distr_4.frameNStart = frameN;  // exact frame index
      
      distr_4.setAutoDraw(true);
    }
    
    
    // *distr_5* updates
    if (((matrix_type >= 1)) && distr_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distr_5.tStart = t;  // (not accounting for frame time here)
      distr_5.frameNStart = frameN;  // exact frame index
      
      distr_5.setAutoDraw(true);
    }
    
    
    // *distr_6* updates
    if (((matrix_type >= 1)) && distr_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distr_6.tStart = t;  // (not accounting for frame time here)
      distr_6.frameNStart = frameN;  // exact frame index
      
      distr_6.setAutoDraw(true);
    }
    
    
    // *distr_7* updates
    if (((matrix_type >= 1)) && distr_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distr_7.tStart = t;  // (not accounting for frame time here)
      distr_7.frameNStart = frameN;  // exact frame index
      
      distr_7.setAutoDraw(true);
    }
    
    
    // *distr_8* updates
    if (((matrix_type >= 1)) && distr_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distr_8.tStart = t;  // (not accounting for frame time here)
      distr_8.frameNStart = frameN;  // exact frame index
      
      distr_8.setAutoDraw(true);
    }
    
    
    // *distr_9* updates
    if (((matrix_type >= 2)) && distr_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distr_9.tStart = t;  // (not accounting for frame time here)
      distr_9.frameNStart = frameN;  // exact frame index
      
      distr_9.setAutoDraw(true);
    }
    
    
    // *distr_10* updates
    if (((matrix_type >= 2)) && distr_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distr_10.tStart = t;  // (not accounting for frame time here)
      distr_10.frameNStart = frameN;  // exact frame index
      
      distr_10.setAutoDraw(true);
    }
    
    
    // *distr_11* updates
    if (((matrix_type >= 2)) && distr_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distr_11.tStart = t;  // (not accounting for frame time here)
      distr_11.frameNStart = frameN;  // exact frame index
      
      distr_11.setAutoDraw(true);
    }
    
    
    // *distr_12* updates
    if (((matrix_type >= 2)) && distr_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distr_12.tStart = t;  // (not accounting for frame time here)
      distr_12.frameNStart = frameN;  // exact frame index
      
      distr_12.setAutoDraw(true);
    }
    
    
    // *distr_13* updates
    if (((matrix_type >= 2)) && distr_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distr_13.tStart = t;  // (not accounting for frame time here)
      distr_13.frameNStart = frameN;  // exact frame index
      
      distr_13.setAutoDraw(true);
    }
    
    
    // *distr_14* updates
    if (((matrix_type >= 2)) && distr_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distr_14.tStart = t;  // (not accounting for frame time here)
      distr_14.frameNStart = frameN;  // exact frame index
      
      distr_14.setAutoDraw(true);
    }
    
    
    // *distr_15* updates
    if (((matrix_type >= 2)) && distr_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distr_15.tStart = t;  // (not accounting for frame time here)
      distr_15.frameNStart = frameN;  // exact frame index
      
      distr_15.setAutoDraw(true);
    }
    
    
    // *distr_16* updates
    if (((matrix_type >= 3)) && distr_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distr_16.tStart = t;  // (not accounting for frame time here)
      distr_16.frameNStart = frameN;  // exact frame index
      
      distr_16.setAutoDraw(true);
    }
    
    
    // *distr_17* updates
    if (((matrix_type >= 3)) && distr_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distr_17.tStart = t;  // (not accounting for frame time here)
      distr_17.frameNStart = frameN;  // exact frame index
      
      distr_17.setAutoDraw(true);
    }
    
    
    // *distr_18* updates
    if (((matrix_type >= 3)) && distr_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distr_18.tStart = t;  // (not accounting for frame time here)
      distr_18.frameNStart = frameN;  // exact frame index
      
      distr_18.setAutoDraw(true);
    }
    
    
    // *distr_19* updates
    if (((matrix_type >= 3)) && distr_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distr_19.tStart = t;  // (not accounting for frame time here)
      distr_19.frameNStart = frameN;  // exact frame index
      
      distr_19.setAutoDraw(true);
    }
    
    
    // *distr_20* updates
    if (((matrix_type >= 3)) && distr_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distr_20.tStart = t;  // (not accounting for frame time here)
      distr_20.frameNStart = frameN;  // exact frame index
      
      distr_20.setAutoDraw(true);
    }
    
    
    // *distr_21* updates
    if (((matrix_type >= 3)) && distr_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distr_21.tStart = t;  // (not accounting for frame time here)
      distr_21.frameNStart = frameN;  // exact frame index
      
      distr_21.setAutoDraw(true);
    }
    
    
    // *distr_22* updates
    if (((matrix_type >= 3)) && distr_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distr_22.tStart = t;  // (not accounting for frame time here)
      distr_22.frameNStart = frameN;  // exact frame index
      
      distr_22.setAutoDraw(true);
    }
    
    
    // *distr_23* updates
    if (((matrix_type >= 3)) && distr_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distr_23.tStart = t;  // (not accounting for frame time here)
      distr_23.frameNStart = frameN;  // exact frame index
      
      distr_23.setAutoDraw(true);
    }
    
    
    // *distr_24* updates
    if (((matrix_type >= 3)) && distr_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distr_24.tStart = t;  // (not accounting for frame time here)
      distr_24.frameNStart = frameN;  // exact frame index
      
      distr_24.setAutoDraw(true);
    }
    
    // *chose_targ* updates
    if (t >= 0.0 && chose_targ.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chose_targ.tStart = t;  // (not accounting for frame time here)
      chose_targ.frameNStart = frameN;  // exact frame index
      
      chose_targ.status = PsychoJS.Status.STARTED;
      chose_targ.mouseClock.reset();
      prevButtonState = chose_targ.getPressed();  // if button is down already this ISN'T a new click
      }
    if (chose_targ.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = chose_targ.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [target, distr_1, distr_2, distr_3, distr_4, distr_5, distr_6, distr_7, distr_8, distr_9, distr_10, distr_11, distr_12, distr_13, distr_14, distr_15, distr_16, distr_17, distr_18, distr_19, distr_20, distr_21, distr_22, distr_23, distr_24]) {
            if (obj.contains(chose_targ)) {
              gotValidClick = true;
              chose_targ.clicked_name.push(obj.name)
              chose_targ.clicked_pos.push(obj.pos)
            }
          }
          // check whether click was in correct object
          if (gotValidClick) {
              corr = 0;
              corrAns = target;
              for (let obj of [corrAns]) {
                  if (obj.contains(chose_targ)) {
                      corr = 1;
                  };
              };
              chose_targ.corr.push(corr);
          };
          if (gotValidClick === true) { 
            _mouseXYs = chose_targ.getPos();
            chose_targ.x.push(_mouseXYs[0]);
            chose_targ.y.push(_mouseXYs[1]);
            chose_targ.leftButton.push(_mouseButtons[0]);
            chose_targ.midButton.push(_mouseButtons[1]);
            chose_targ.rightButton.push(_mouseButtons[2]);
            chose_targ.time.push(chose_targ.mouseClock.getTime());
          }
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    main_trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function main_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'main_trial' ---
    main_trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from code_main
    psychoJS.experiment.addData("test_indicator", test_ind);
    psychoJS.experiment.addData("stim_name", names[test]);
    psychoJS.experiment.addData("stim_id", test);
    psychoJS.experiment.addData("stim_descr", instruction);
    psychoJS.experiment.addData("stim_fav", isfav[test]);
    psychoJS.experiment.addData("stim_freq", isfreq[test]);
    psychoJS.experiment.addData("matrix_type", matrix_type);
    psychoJS.experiment.addData("taget_posititon", test_position);
    
    test_ind_seq.splice(test_ind_seq.indexOf(test_ind), 1);
    
    // store data for psychoJS.experiment (ExperimentHandler)
    if (chose_targ.x) {  psychoJS.experiment.addData('chose_targ.x', chose_targ.x[0])};
    if (chose_targ.y) {  psychoJS.experiment.addData('chose_targ.y', chose_targ.y[0])};
    if (chose_targ.leftButton) {  psychoJS.experiment.addData('chose_targ.leftButton', chose_targ.leftButton[0])};
    if (chose_targ.midButton) {  psychoJS.experiment.addData('chose_targ.midButton', chose_targ.midButton[0])};
    if (chose_targ.rightButton) {  psychoJS.experiment.addData('chose_targ.rightButton', chose_targ.rightButton[0])};
    if (chose_targ.time) {  psychoJS.experiment.addData('chose_targ.time', chose_targ.time[0])};
    if (chose_targ.corr) {  psychoJS.experiment.addData('chose_targ.corr', chose_targ.corr[0])};
    if (chose_targ.clicked_name) {  psychoJS.experiment.addData('chose_targ.clicked_name', chose_targ.clicked_name[0])};
    if (chose_targ.clicked_pos) {  psychoJS.experiment.addData('chose_targ.clicked_pos', chose_targ.clicked_pos[0])};
    
    // the Routine "main_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_space_allKeys;
var outroComponents;
function outroRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'outro' ---
    t = 0;
    outroClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_space.keys = undefined;
    end_space.rt = undefined;
    _end_space_allKeys = [];
    // keep track of which components have finished
    outroComponents = [];
    outroComponents.push(text_2);
    outroComponents.push(end_space);
    
    outroComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function outroRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'outro' ---
    // get current time
    t = outroClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // *end_space* updates
    if (t >= 0.0 && end_space.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_space.tStart = t;  // (not accounting for frame time here)
      end_space.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_space.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_space.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_space.clearEvents(); });
    }
    
    if (end_space.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_space.getKeys({keyList: ['space'], waitRelease: false});
      _end_space_allKeys = _end_space_allKeys.concat(theseKeys);
      if (_end_space_allKeys.length > 0) {
        end_space.keys = _end_space_allKeys[_end_space_allKeys.length - 1].name;  // just the last key pressed
        end_space.rt = _end_space_allKeys[_end_space_allKeys.length - 1].rt;
        end_space.duration = _end_space_allKeys[_end_space_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    outroComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function outroRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'outro' ---
    outroComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    end_space.stop();
    // the Routine "outro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
