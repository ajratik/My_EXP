#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2023.2.3),
    on Mon Apr  8 00:46:34 2024
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.tools import environmenttools
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER, priority)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard

# --- Setup global variables (available in all functions) ---
# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# Store info about the experiment session
psychopyVersion = '2023.2.3'
expName = 'Visual_search_sk'  # from the Builder filename that created this script
expInfo = {
    'Имя_Фамилия': '',
    'Пол': '',
    'Возраст': '',
    'group_sk_fl_neu': '',
    'date': data.getDateStr(),  # add a simple timestamp
    'expName': expName,
    'psychopyVersion': psychopyVersion,
}


def showExpInfoDlg(expInfo):
    """
    Show participant info dialog.
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    
    Returns
    ==========
    dict
        Information about this experiment.
    """
    # temporarily remove keys which the dialog doesn't need to show
    poppedKeys = {
        'date': expInfo.pop('date', data.getDateStr()),
        'expName': expInfo.pop('expName', expName),
        'psychopyVersion': expInfo.pop('psychopyVersion', psychopyVersion),
    }
    # show participant info dialog
    dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
    if dlg.OK == False:
        core.quit()  # user pressed cancel
    # restore hidden keys
    expInfo.update(poppedKeys)
    # return expInfo
    return expInfo


def setupData(expInfo, dataDir=None):
    """
    Make an ExperimentHandler to handle trials and saving.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    dataDir : Path, str or None
        Folder to save the data to, leave as None to create a folder in the current directory.    
    Returns
    ==========
    psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    
    # data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
    if dataDir is None:
        dataDir = _thisDir
    filename = u'data/%s_%s_%s' % (expInfo['Имя_Фамилия'], expName, expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version='',
        extraInfo=expInfo, runtimeInfo=None,
        originPath='/Users/ajratik/Desktop/experiment/Visual_search_sk_lastrun.py',
        savePickle=True, saveWideText=True,
        dataFileName=dataDir + os.sep + filename, sortColumns='time'
    )
    thisExp.setPriority('thisRow.t', priority.CRITICAL)
    thisExp.setPriority('expName', priority.LOW)
    # return experiment handler
    return thisExp


def setupLogging(filename):
    """
    Setup a log file and tell it what level to log at.
    
    Parameters
    ==========
    filename : str or pathlib.Path
        Filename to save log file and data files as, doesn't need an extension.
    
    Returns
    ==========
    psychopy.logging.LogFile
        Text stream to receive inputs from the logging system.
    """
    # this outputs to the screen, not a file
    logging.console.setLevel(logging.EXP)
    # save a log file for detail verbose info
    logFile = logging.LogFile(filename+'.log', level=logging.EXP)
    
    return logFile


def setupWindow(expInfo=None, win=None):
    """
    Setup the Window
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    win : psychopy.visual.Window
        Window to setup - leave as None to create a new window.
    
    Returns
    ==========
    psychopy.visual.Window
        Window in which to run this experiment.
    """
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=[1920, 1080], fullscr=True, screen=0,
            winType='pyglet', allowStencil=False,
            monitor='testMonitor', color='CFCFCF', colorSpace='hex',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='pix'
        )
        if expInfo is not None:
            # store frame rate of monitor if we can measure it
            expInfo['frameRate'] = win.getActualFrameRate()
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = 'CFCFCF'
        win.colorSpace = 'hex'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'pix'
    win.mouseVisible = False
    win.hideMessage()
    return win


def setupInputs(expInfo, thisExp, win):
    """
    Setup whatever inputs are available (mouse, keyboard, eyetracker, etc.)
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window in which to run this experiment.
    Returns
    ==========
    dict
        Dictionary of input devices by name.
    """
    # --- Setup input devices ---
    inputs = {}
    ioConfig = {}
    ioSession = ioServer = eyetracker = None
    
    # create a default keyboard (e.g. to check for escape)
    defaultKeyboard = keyboard.Keyboard(backend='ptb')
    # return inputs dict
    return {
        'ioServer': ioServer,
        'defaultKeyboard': defaultKeyboard,
        'eyetracker': eyetracker,
    }

def pauseExperiment(thisExp, inputs=None, win=None, timers=[], playbackComponents=[]):
    """
    Pause this experiment, preventing the flow from advancing to the next routine until resumed.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    inputs : dict
        Dictionary of input devices by name.
    win : psychopy.visual.Window
        Window for this experiment.
    timers : list, tuple
        List of timers to reset once pausing is finished.
    playbackComponents : list, tuple
        List of any components with a `pause` method which need to be paused.
    """
    # if we are not paused, do nothing
    if thisExp.status != PAUSED:
        return
    
    # pause any playback components
    for comp in playbackComponents:
        comp.pause()
    # prevent components from auto-drawing
    win.stashAutoDraw()
    # run a while loop while we wait to unpause
    while thisExp.status == PAUSED:
        # make sure we have a keyboard
        if inputs is None:
            inputs = {
                'defaultKeyboard': keyboard.Keyboard(backend='PsychToolbox')
            }
        # check for quit (typically the Esc key)
        if inputs['defaultKeyboard'].getKeys(keyList=['escape']):
            endExperiment(thisExp, win=win, inputs=inputs)
        # flip the screen
        win.flip()
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, inputs=inputs, win=win)
    # resume any playback components
    for comp in playbackComponents:
        comp.play()
    # restore auto-drawn components
    win.retrieveAutoDraw()
    # reset any timers
    for timer in timers:
        timer.reset()


def run(expInfo, thisExp, win, inputs, globalClock=None, thisSession=None):
    """
    Run the experiment flow.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    psychopy.visual.Window
        Window in which to run this experiment.
    inputs : dict
        Dictionary of input devices by name.
    globalClock : psychopy.core.clock.Clock or None
        Clock to get global time from - supply None to make a new one.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    # mark experiment as started
    thisExp.status = STARTED
    # make sure variables created by exec are available globally
    exec = environmenttools.setExecEnvironment(globals())
    # get device handles from dict of input devices
    ioServer = inputs['ioServer']
    defaultKeyboard = inputs['defaultKeyboard']
    eyetracker = inputs['eyetracker']
    # make sure we're running in the directory for this experiment
    os.chdir(_thisDir)
    # get filename from ExperimentHandler for convenience
    filename = thisExp.dataFileName
    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    
    # --- Initialize components for Routine "welcome_instr" ---
    text = visual.TextStim(win=win, name='text',
        text='Спасибо, что согласились пройти наш эксперимент по исследованию восприятия цифровых интерфейсов.\n\nПожалуйста, внимательно ознакомьтесь с инструкциями, прежде чем приступать к эксперименту.\n\nВ ходе эксперимента вам необходимо будет искать приложения, с описанным функционалом среди иконок других приложений.\n\nЧтобы перейти к дальнейшим инструкциям, нажмите пробел.',
        font='Arial',
        pos=(0, 0), height=40.0, wrapWidth=1400.0, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    go_train_instr = keyboard.Keyboard()
    
    # --- Initialize components for Routine "test_instr" ---
    test_text = visual.TextStim(win=win, name='test_text',
        text='Для ознакомления с процедурой эксперимента, мы предлагаем вам пройти серию тренировочных проб.\n\nСначала перед вами появится текстовое описание приложения, которое необходимо найти. Оно будет начинаться со слов "Я бы хотел...". \n\nДалее вам предстоит найти иконку описанного приложения среди нескольких представленных иконок. Как только вы найдете нужную иконку, просто выберете её кликом левой кнопки мыши.\n\nКак только вы выберете иконку, вы узнаете корректность вашего ответа.\n\nПостарайтесь отвечать как можно точнее и быстрее.\n\nДля перехода к тренировочным пробам нажмите пробел.\n',
        font='Arial',
        pos=(0, 0), height=40.0, wrapWidth=1400.0, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    gototest = keyboard.Keyboard()
    
    # --- Initialize components for Routine "test_search_task" ---
    # Run 'Begin Experiment' code from test_code
    import random
    import pandas as pd
    
    #Дизайн
    design = '_' + expInfo['group_sk_fl_neu']
    group_sk_fl_neu = expInfo['group_sk_fl_neu']
    
    #Подгрузить файл с данными стимулов
    df = pd.read_csv('exp_data.csv')
    
    
    #Генереация айди проб теста
    train_test_ind_seq = 0
    
    #выбор имен стимулов для всех проб
    train_order = [18,21,38]
    
    #тип матрицы
    train_matrix_seq = [1]*3
    test_search_text = visual.TextStim(win=win, name='test_search_text',
        text='',
        font='Arial',
        pos=(0, 150), height=60.0, wrapWidth=1400.0, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    test_go_search = keyboard.Keyboard()
    test_space_instr = visual.TextStim(win=win, name='test_space_instr',
        text='Как только будете готовы начать, нажмите пробел.',
        font='Arial',
        pos=(0, -300), height=23.0, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    
    # --- Initialize components for Routine "test_trial" ---
    test_target = visual.ImageStim(
        win=win,
        name='test_target', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1.0000, 1.0000, 1.0000], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    test_distr_1 = visual.ImageStim(
        win=win,
        name='test_distr_1', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    test_distr_2 = visual.ImageStim(
        win=win,
        name='test_distr_2', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    test_distr_3 = visual.ImageStim(
        win=win,
        name='test_distr_3', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    test_distr_4 = visual.ImageStim(
        win=win,
        name='test_distr_4', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-5.0)
    test_distr_5 = visual.ImageStim(
        win=win,
        name='test_distr_5', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-6.0)
    test_distr_6 = visual.ImageStim(
        win=win,
        name='test_distr_6', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-7.0)
    test_distr_7 = visual.ImageStim(
        win=win,
        name='test_distr_7', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-8.0)
    test_distr_8 = visual.ImageStim(
        win=win,
        name='test_distr_8', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-9.0)
    test_chose_targ = event.Mouse(win=win)
    x, y = [None, None]
    test_chose_targ.mouseClock = core.Clock()
    
    # --- Initialize components for Routine "feedback" ---
    feedback_text = visual.TextStim(win=win, name='feedback_text',
        text='',
        font='Arial',
        units='pix', pos=(0, 0), height=60.0, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    
    # --- Initialize components for Routine "main_instr" ---
    main_text = visual.TextStim(win=win, name='main_text',
        text='Вы отлично справились с тренировочным заданием. \n\nТеперь вам предстоит решить серию подобных задний, с тем лишь отличием, что обратная связь по корректности ответа предостовляться не будет. \n\nПостарайтесь давать максимально точный и быстрый ответ.\n\nКак только вы будете готовы начать основную часть эксперимента, нажмите пробел.',
        font='Arial',
        pos=(0, 0), height=40.0, wrapWidth=1400.0, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    gomain = keyboard.Keyboard()
    
    # --- Initialize components for Routine "main_search_task" ---
    # Run 'Begin Experiment' code from code1
    #Генереация айди проб
    test_ind_seq = list(range(0,90))
    
    #выбор имен стимулов для всех проб
    test_order_1 = random.sample(df[df.fav==1]['id'].tolist(), 15)
    test_order_2 = random.sample(df[df.fav==0]['id'].tolist(), 15)
    test_order_3 = random.sample(df[df.fav==1]['id'].tolist(), 15)
    test_order_4 = random.sample(df[df.fav==0]['id'].tolist(), 15)
    test_order_5 = random.sample(df[df.fav==1]['id'].tolist(), 15)
    test_order_6 = random.sample(df[df.fav==0]['id'].tolist(), 15)
    
    test_order = test_order_1 + test_order_2 + test_order_3 + test_order_4 + test_order_5 + test_order_6
    
    #тип матрицы
    matrix_seq = [1]*30 + [2]*30 + [3]*30
    main_search_text = visual.TextStim(win=win, name='main_search_text',
        text='',
        font='Arial',
        pos=(0, 150), height=60.0, wrapWidth=1400.0, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    main_go_search = keyboard.Keyboard()
    space_instr = visual.TextStim(win=win, name='space_instr',
        text='Как только будете готовы начать, нажмите пробел.',
        font='Arial',
        pos=(0, -300), height=23.0, wrapWidth=None, ori=0.0, 
        color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    
    # --- Initialize components for Routine "main_trial" ---
    # Run 'Begin Experiment' code from code_main
    #список позиций для картинок 3х3
    positions_3x3 =[]
    for i in range(3):
        for j in range (3):
            positions_3x3.append([-206 + i*206, -206 + j*206])
    
    #список позиций для картинок 4х4
    positions_4x4 =[]
    for i in range(4):
        for j in range (4):
            positions_4x4.append([-309 + i*206, -309 + j*206])
    
    #список позиций для картинок 5х5
    positions_5x5 =[]
    for i in range(5):
        for j in range (5):
            positions_5x5.append([-412 + i*206, -412 + j*206])
    target = visual.ImageStim(
        win=win,
        name='target', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1.0000, 1.0000, 1.0000], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    distr_1 = visual.ImageStim(
        win=win,
        name='distr_1', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    distr_2 = visual.ImageStim(
        win=win,
        name='distr_2', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    distr_3 = visual.ImageStim(
        win=win,
        name='distr_3', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    distr_4 = visual.ImageStim(
        win=win,
        name='distr_4', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-5.0)
    distr_5 = visual.ImageStim(
        win=win,
        name='distr_5', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-6.0)
    distr_6 = visual.ImageStim(
        win=win,
        name='distr_6', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-7.0)
    distr_7 = visual.ImageStim(
        win=win,
        name='distr_7', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-8.0)
    distr_8 = visual.ImageStim(
        win=win,
        name='distr_8', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-9.0)
    distr_9 = visual.ImageStim(
        win=win,
        name='distr_9', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-10.0)
    distr_10 = visual.ImageStim(
        win=win,
        name='distr_10', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-11.0)
    distr_11 = visual.ImageStim(
        win=win,
        name='distr_11', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-12.0)
    distr_12 = visual.ImageStim(
        win=win,
        name='distr_12', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-13.0)
    distr_13 = visual.ImageStim(
        win=win,
        name='distr_13', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-14.0)
    distr_14 = visual.ImageStim(
        win=win,
        name='distr_14', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-15.0)
    distr_15 = visual.ImageStim(
        win=win,
        name='distr_15', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-16.0)
    distr_16 = visual.ImageStim(
        win=win,
        name='distr_16', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-17.0)
    distr_17 = visual.ImageStim(
        win=win,
        name='distr_17', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-18.0)
    distr_18 = visual.ImageStim(
        win=win,
        name='distr_18', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-19.0)
    distr_19 = visual.ImageStim(
        win=win,
        name='distr_19', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-20.0)
    distr_20 = visual.ImageStim(
        win=win,
        name='distr_20', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-21.0)
    distr_21 = visual.ImageStim(
        win=win,
        name='distr_21', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-22.0)
    distr_22 = visual.ImageStim(
        win=win,
        name='distr_22', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-23.0)
    distr_23 = visual.ImageStim(
        win=win,
        name='distr_23', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-24.0)
    distr_24 = visual.ImageStim(
        win=win,
        name='distr_24', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=[0,0], size=(112, 112) if group_sk_fl_neu != 'neu' else (150, 150),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-25.0)
    chose_targ = event.Mouse(win=win)
    x, y = [None, None]
    chose_targ.mouseClock = core.Clock()
    
    # --- Initialize components for Routine "outro" ---
    text_2 = visual.TextStim(win=win, name='text_2',
        text='Спасибо за участие в эксперименте!\nЕсли у вас остались или появились вопросы по поводу нашего эксперимента, обратитесь к экспериментатору, он с радостью на них ответит и выслушает вашу обратную связь.\n\nДля окончания эксперимента нажмите пробел и ОБЯЗАТЕЛЬНО дождитесь зеленого индикатора, прежде чем закрыввать страницу.',
        font='Arial',
        pos=(0, 0), height=40.0, wrapWidth=1400.0, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    end_space = keyboard.Keyboard()
    
    # create some handy timers
    if globalClock is None:
        globalClock = core.Clock()  # to track the time since experiment started
    if ioServer is not None:
        ioServer.syncClock(globalClock)
    logging.setDefaultClock(globalClock)
    routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine
    win.flip()  # flip window to reset last flip timer
    # store the exact time the global clock started
    expInfo['expStart'] = data.getDateStr(format='%Y-%m-%d %Hh%M.%S.%f %z', fractionalSecondDigits=6)
    
    # --- Prepare to start Routine "welcome_instr" ---
    continueRoutine = True
    # update component parameters for each repeat
    go_train_instr.keys = []
    go_train_instr.rt = []
    _go_train_instr_allKeys = []
    # keep track of which components have finished
    welcome_instrComponents = [text, go_train_instr]
    for thisComponent in welcome_instrComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "welcome_instr" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text* updates
        
        # if text is starting this frame...
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            # update status
            text.status = STARTED
            text.setAutoDraw(True)
        
        # if text is active this frame...
        if text.status == STARTED:
            # update params
            pass
        
        # *go_train_instr* updates
        waitOnFlip = False
        
        # if go_train_instr is starting this frame...
        if go_train_instr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            go_train_instr.frameNStart = frameN  # exact frame index
            go_train_instr.tStart = t  # local t and not account for scr refresh
            go_train_instr.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(go_train_instr, 'tStartRefresh')  # time at next scr refresh
            # update status
            go_train_instr.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(go_train_instr.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(go_train_instr.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if go_train_instr.status == STARTED and not waitOnFlip:
            theseKeys = go_train_instr.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _go_train_instr_allKeys.extend(theseKeys)
            if len(_go_train_instr_allKeys):
                go_train_instr.keys = _go_train_instr_allKeys[-1].name  # just the last key pressed
                go_train_instr.rt = _go_train_instr_allKeys[-1].rt
                go_train_instr.duration = _go_train_instr_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, inputs=inputs, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in welcome_instrComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "welcome_instr" ---
    for thisComponent in welcome_instrComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "welcome_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "test_instr" ---
    continueRoutine = True
    # update component parameters for each repeat
    gototest.keys = []
    gototest.rt = []
    _gototest_allKeys = []
    # keep track of which components have finished
    test_instrComponents = [test_text, gototest]
    for thisComponent in test_instrComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "test_instr" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *test_text* updates
        
        # if test_text is starting this frame...
        if test_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            test_text.frameNStart = frameN  # exact frame index
            test_text.tStart = t  # local t and not account for scr refresh
            test_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(test_text, 'tStartRefresh')  # time at next scr refresh
            # update status
            test_text.status = STARTED
            test_text.setAutoDraw(True)
        
        # if test_text is active this frame...
        if test_text.status == STARTED:
            # update params
            pass
        
        # *gototest* updates
        waitOnFlip = False
        
        # if gototest is starting this frame...
        if gototest.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            gototest.frameNStart = frameN  # exact frame index
            gototest.tStart = t  # local t and not account for scr refresh
            gototest.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(gototest, 'tStartRefresh')  # time at next scr refresh
            # update status
            gototest.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(gototest.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(gototest.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if gototest.status == STARTED and not waitOnFlip:
            theseKeys = gototest.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _gototest_allKeys.extend(theseKeys)
            if len(_gototest_allKeys):
                gototest.keys = _gototest_allKeys[-1].name  # just the last key pressed
                gototest.rt = _gototest_allKeys[-1].rt
                gototest.duration = _gototest_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, inputs=inputs, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in test_instrComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "test_instr" ---
    for thisComponent in test_instrComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "test_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    test_loop = data.TrialHandler(nReps=3.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='test_loop')
    thisExp.addLoop(test_loop)  # add the loop to the experiment
    thisTest_loop = test_loop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTest_loop.rgb)
    if thisTest_loop != None:
        for paramName in thisTest_loop:
            globals()[paramName] = thisTest_loop[paramName]
    
    for thisTest_loop in test_loop:
        currentLoop = test_loop
        thisExp.timestampOnFlip(win, 'thisRow.t')
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                inputs=inputs, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
        )
        # abbreviate parameter names if possible (e.g. rgb = thisTest_loop.rgb)
        if thisTest_loop != None:
            for paramName in thisTest_loop:
                globals()[paramName] = thisTest_loop[paramName]
        
        # --- Prepare to start Routine "test_search_task" ---
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from test_code
        
        
        #выбираем целевой стимул
        test = train_order[train_test_ind_seq]
        matrix_type = train_matrix_seq[train_test_ind_seq]
        instruction = df.iloc[test-1]['descr']
        test_search_text.setText("Я бы хотел ...\n\n" + instruction)
        test_go_search.keys = []
        test_go_search.rt = []
        _test_go_search_allKeys = []
        # keep track of which components have finished
        test_search_taskComponents = [test_search_text, test_go_search, test_space_instr]
        for thisComponent in test_search_taskComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "test_search_task" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *test_search_text* updates
            
            # if test_search_text is starting this frame...
            if test_search_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                test_search_text.frameNStart = frameN  # exact frame index
                test_search_text.tStart = t  # local t and not account for scr refresh
                test_search_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(test_search_text, 'tStartRefresh')  # time at next scr refresh
                # update status
                test_search_text.status = STARTED
                test_search_text.setAutoDraw(True)
            
            # if test_search_text is active this frame...
            if test_search_text.status == STARTED:
                # update params
                pass
            
            # *test_go_search* updates
            waitOnFlip = False
            
            # if test_go_search is starting this frame...
            if test_go_search.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                test_go_search.frameNStart = frameN  # exact frame index
                test_go_search.tStart = t  # local t and not account for scr refresh
                test_go_search.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(test_go_search, 'tStartRefresh')  # time at next scr refresh
                # update status
                test_go_search.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(test_go_search.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(test_go_search.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if test_go_search.status == STARTED and not waitOnFlip:
                theseKeys = test_go_search.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                _test_go_search_allKeys.extend(theseKeys)
                if len(_test_go_search_allKeys):
                    test_go_search.keys = _test_go_search_allKeys[-1].name  # just the last key pressed
                    test_go_search.rt = _test_go_search_allKeys[-1].rt
                    test_go_search.duration = _test_go_search_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # *test_space_instr* updates
            
            # if test_space_instr is starting this frame...
            if test_space_instr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                test_space_instr.frameNStart = frameN  # exact frame index
                test_space_instr.tStart = t  # local t and not account for scr refresh
                test_space_instr.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(test_space_instr, 'tStartRefresh')  # time at next scr refresh
                # update status
                test_space_instr.status = STARTED
                test_space_instr.setAutoDraw(True)
            
            # if test_space_instr is active this frame...
            if test_space_instr.status == STARTED:
                # update params
                pass
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, inputs=inputs, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in test_search_taskComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "test_search_task" ---
        for thisComponent in test_search_taskComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "test_search_task" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "test_trial" ---
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from test_code_trial
        #Генерируем список дистракторов из всех стимулов
        probe_list = df[df.test== 0]['id'].tolist()
        probe_list.remove(test)
        probe_list.append(random.choice(probe_list))
        
        #выбираем тип матрицыv и номера дистракторов
        matrix_positions = positions_3x3
        dist_list= random.sample(probe_list, 8)
        
        #Выбираем позицию для целевого стимула
        test_position = random.choice(matrix_positions)
        
        #Выбираем оставляем позиции для дистракторов
        dist_position = matrix_positions[:]
        dist_position.remove(test_position)
        
        test_target.setPos((test_position[0], test_position[1]))
        test_target.setImage(str(test)+design+'.png')
        test_distr_1.setPos((dist_position[0][0], dist_position[0][1]))
        test_distr_1.setImage(str(dist_list[0])+design+'.png' )
        test_distr_2.setPos((dist_position[1][0], dist_position[1][1]))
        test_distr_2.setImage(str(dist_list[1])+design+'.png')
        test_distr_3.setPos((dist_position[2][0], dist_position[2][1]))
        test_distr_3.setImage(str(dist_list[2])+design+'.png')
        test_distr_4.setPos((dist_position[3][0], dist_position[3][1]))
        test_distr_4.setImage(str(dist_list[3])+design+'.png')
        test_distr_5.setPos((dist_position[4][0], dist_position[4][1]))
        test_distr_5.setImage(str(dist_list[4])+design+'.png')
        test_distr_6.setPos((dist_position[5][0], dist_position[5][1]))
        test_distr_6.setImage(str(dist_list[5])+design+'.png')
        test_distr_7.setPos((dist_position[6][0], dist_position[6][1]))
        test_distr_7.setImage(str(dist_list[6])+design+'.png')
        test_distr_8.setPos((dist_position[7][0], dist_position[7][1]))
        test_distr_8.setImage(str(dist_list[7])+design+'.png')
        # setup some python lists for storing info about the test_chose_targ
        test_chose_targ.x = []
        test_chose_targ.y = []
        test_chose_targ.leftButton = []
        test_chose_targ.midButton = []
        test_chose_targ.rightButton = []
        test_chose_targ.time = []
        test_chose_targ.corr = []
        test_chose_targ.clicked_name = []
        test_chose_targ.clicked_pos = []
        gotValidClick = False  # until a click is received
        # keep track of which components have finished
        test_trialComponents = [test_target, test_distr_1, test_distr_2, test_distr_3, test_distr_4, test_distr_5, test_distr_6, test_distr_7, test_distr_8, test_chose_targ]
        for thisComponent in test_trialComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "test_trial" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *test_target* updates
            
            # if test_target is starting this frame...
            if test_target.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                test_target.frameNStart = frameN  # exact frame index
                test_target.tStart = t  # local t and not account for scr refresh
                test_target.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(test_target, 'tStartRefresh')  # time at next scr refresh
                # update status
                test_target.status = STARTED
                test_target.setAutoDraw(True)
            
            # if test_target is active this frame...
            if test_target.status == STARTED:
                # update params
                pass
            
            # *test_distr_1* updates
            
            # if test_distr_1 is starting this frame...
            if test_distr_1.status == NOT_STARTED and matrix_type >= 1:
                # keep track of start time/frame for later
                test_distr_1.frameNStart = frameN  # exact frame index
                test_distr_1.tStart = t  # local t and not account for scr refresh
                test_distr_1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(test_distr_1, 'tStartRefresh')  # time at next scr refresh
                # update status
                test_distr_1.status = STARTED
                test_distr_1.setAutoDraw(True)
            
            # if test_distr_1 is active this frame...
            if test_distr_1.status == STARTED:
                # update params
                pass
            
            # *test_distr_2* updates
            
            # if test_distr_2 is starting this frame...
            if test_distr_2.status == NOT_STARTED and matrix_type >= 1:
                # keep track of start time/frame for later
                test_distr_2.frameNStart = frameN  # exact frame index
                test_distr_2.tStart = t  # local t and not account for scr refresh
                test_distr_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(test_distr_2, 'tStartRefresh')  # time at next scr refresh
                # update status
                test_distr_2.status = STARTED
                test_distr_2.setAutoDraw(True)
            
            # if test_distr_2 is active this frame...
            if test_distr_2.status == STARTED:
                # update params
                pass
            
            # *test_distr_3* updates
            
            # if test_distr_3 is starting this frame...
            if test_distr_3.status == NOT_STARTED and matrix_type >= 1:
                # keep track of start time/frame for later
                test_distr_3.frameNStart = frameN  # exact frame index
                test_distr_3.tStart = t  # local t and not account for scr refresh
                test_distr_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(test_distr_3, 'tStartRefresh')  # time at next scr refresh
                # update status
                test_distr_3.status = STARTED
                test_distr_3.setAutoDraw(True)
            
            # if test_distr_3 is active this frame...
            if test_distr_3.status == STARTED:
                # update params
                pass
            
            # *test_distr_4* updates
            
            # if test_distr_4 is starting this frame...
            if test_distr_4.status == NOT_STARTED and matrix_type >= 1:
                # keep track of start time/frame for later
                test_distr_4.frameNStart = frameN  # exact frame index
                test_distr_4.tStart = t  # local t and not account for scr refresh
                test_distr_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(test_distr_4, 'tStartRefresh')  # time at next scr refresh
                # update status
                test_distr_4.status = STARTED
                test_distr_4.setAutoDraw(True)
            
            # if test_distr_4 is active this frame...
            if test_distr_4.status == STARTED:
                # update params
                pass
            
            # *test_distr_5* updates
            
            # if test_distr_5 is starting this frame...
            if test_distr_5.status == NOT_STARTED and matrix_type >= 1:
                # keep track of start time/frame for later
                test_distr_5.frameNStart = frameN  # exact frame index
                test_distr_5.tStart = t  # local t and not account for scr refresh
                test_distr_5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(test_distr_5, 'tStartRefresh')  # time at next scr refresh
                # update status
                test_distr_5.status = STARTED
                test_distr_5.setAutoDraw(True)
            
            # if test_distr_5 is active this frame...
            if test_distr_5.status == STARTED:
                # update params
                pass
            
            # *test_distr_6* updates
            
            # if test_distr_6 is starting this frame...
            if test_distr_6.status == NOT_STARTED and matrix_type >= 1:
                # keep track of start time/frame for later
                test_distr_6.frameNStart = frameN  # exact frame index
                test_distr_6.tStart = t  # local t and not account for scr refresh
                test_distr_6.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(test_distr_6, 'tStartRefresh')  # time at next scr refresh
                # update status
                test_distr_6.status = STARTED
                test_distr_6.setAutoDraw(True)
            
            # if test_distr_6 is active this frame...
            if test_distr_6.status == STARTED:
                # update params
                pass
            
            # *test_distr_7* updates
            
            # if test_distr_7 is starting this frame...
            if test_distr_7.status == NOT_STARTED and matrix_type >= 1:
                # keep track of start time/frame for later
                test_distr_7.frameNStart = frameN  # exact frame index
                test_distr_7.tStart = t  # local t and not account for scr refresh
                test_distr_7.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(test_distr_7, 'tStartRefresh')  # time at next scr refresh
                # update status
                test_distr_7.status = STARTED
                test_distr_7.setAutoDraw(True)
            
            # if test_distr_7 is active this frame...
            if test_distr_7.status == STARTED:
                # update params
                pass
            
            # *test_distr_8* updates
            
            # if test_distr_8 is starting this frame...
            if test_distr_8.status == NOT_STARTED and matrix_type >= 1:
                # keep track of start time/frame for later
                test_distr_8.frameNStart = frameN  # exact frame index
                test_distr_8.tStart = t  # local t and not account for scr refresh
                test_distr_8.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(test_distr_8, 'tStartRefresh')  # time at next scr refresh
                # update status
                test_distr_8.status = STARTED
                test_distr_8.setAutoDraw(True)
            
            # if test_distr_8 is active this frame...
            if test_distr_8.status == STARTED:
                # update params
                pass
            # *test_chose_targ* updates
            
            # if test_chose_targ is starting this frame...
            if test_chose_targ.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                test_chose_targ.frameNStart = frameN  # exact frame index
                test_chose_targ.tStart = t  # local t and not account for scr refresh
                test_chose_targ.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(test_chose_targ, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.addData('test_chose_targ.started', t)
                # update status
                test_chose_targ.status = STARTED
                test_chose_targ.mouseClock.reset()
                prevButtonState = test_chose_targ.getPressed()  # if button is down already this ISN'T a new click
            if test_chose_targ.status == STARTED:  # only update if started and not finished!
                buttons = test_chose_targ.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        clickableList = environmenttools.getFromNames([test_target, test_distr_1, test_distr_2, test_distr_3, test_distr_4, test_distr_5, test_distr_6, test_distr_7, test_distr_8], namespace=locals())
                        for obj in clickableList:
                            # is this object clicked on?
                            if obj.contains(test_chose_targ):
                                gotValidClick = True
                                test_chose_targ.clicked_name.append(obj.name)
                                test_chose_targ.clicked_pos.append(obj.pos)
                        # check whether click was in correct object
                        if gotValidClick:
                            corr = 0
                            corrAns = environmenttools.getFromNames(test_target, namespace=locals())
                            for obj in corrAns:
                                # is this object clicked on?
                                if obj.contains(test_chose_targ):
                                    corr = 1
                            test_chose_targ.corr.append(corr)
                        if gotValidClick:
                            x, y = test_chose_targ.getPos()
                            test_chose_targ.x.append(x)
                            test_chose_targ.y.append(y)
                            buttons = test_chose_targ.getPressed()
                            test_chose_targ.leftButton.append(buttons[0])
                            test_chose_targ.midButton.append(buttons[1])
                            test_chose_targ.rightButton.append(buttons[2])
                            test_chose_targ.time.append(test_chose_targ.mouseClock.getTime())
                        if gotValidClick:
                            continueRoutine = False  # end routine on response
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, inputs=inputs, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in test_trialComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "test_trial" ---
        for thisComponent in test_trialComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # Run 'End Routine' code from test_code_trial
        #Переходим к слкдующему стимулу
        train_test_ind_seq +=1
        # store data for test_loop (TrialHandler)
        test_loop.addData('test_chose_targ.x', test_chose_targ.x)
        test_loop.addData('test_chose_targ.y', test_chose_targ.y)
        test_loop.addData('test_chose_targ.leftButton', test_chose_targ.leftButton)
        test_loop.addData('test_chose_targ.midButton', test_chose_targ.midButton)
        test_loop.addData('test_chose_targ.rightButton', test_chose_targ.rightButton)
        test_loop.addData('test_chose_targ.time', test_chose_targ.time)
        test_loop.addData('test_chose_targ.corr', test_chose_targ.corr)
        test_loop.addData('test_chose_targ.clicked_name', test_chose_targ.clicked_name)
        test_loop.addData('test_chose_targ.clicked_pos', test_chose_targ.clicked_pos)
        # the Routine "test_trial" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "feedback" ---
        continueRoutine = True
        # update component parameters for each repeat
        feedback_text.setColor( (-1.0000, 0.6784, -1.0000) if test_chose_targ.clicked_name[0] == 'test_target' else (1.0000, -1.0000, -1.0000), colorSpace='rgb')
        feedback_text.setText('Верно' if test_chose_targ.clicked_name[0] == 'test_target' else 'Неверно')
        # keep track of which components have finished
        feedbackComponents = [feedback_text]
        for thisComponent in feedbackComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "feedback" ---
        routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 1.2:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *feedback_text* updates
            
            # if feedback_text is starting this frame...
            if feedback_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                feedback_text.frameNStart = frameN  # exact frame index
                feedback_text.tStart = t  # local t and not account for scr refresh
                feedback_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(feedback_text, 'tStartRefresh')  # time at next scr refresh
                # update status
                feedback_text.status = STARTED
                feedback_text.setAutoDraw(True)
            
            # if feedback_text is active this frame...
            if feedback_text.status == STARTED:
                # update params
                pass
            
            # if feedback_text is stopping this frame...
            if feedback_text.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > feedback_text.tStartRefresh + 1.2-frameTolerance:
                    # keep track of stop time/frame for later
                    feedback_text.tStop = t  # not accounting for scr refresh
                    feedback_text.frameNStop = frameN  # exact frame index
                    # update status
                    feedback_text.status = FINISHED
                    feedback_text.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, inputs=inputs, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in feedbackComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "feedback" ---
        for thisComponent in feedbackComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if routineForceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-1.200000)
        thisExp.nextEntry()
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
    # completed 3.0 repeats of 'test_loop'
    
    
    # --- Prepare to start Routine "main_instr" ---
    continueRoutine = True
    # update component parameters for each repeat
    gomain.keys = []
    gomain.rt = []
    _gomain_allKeys = []
    # keep track of which components have finished
    main_instrComponents = [main_text, gomain]
    for thisComponent in main_instrComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "main_instr" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *main_text* updates
        
        # if main_text is starting this frame...
        if main_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            main_text.frameNStart = frameN  # exact frame index
            main_text.tStart = t  # local t and not account for scr refresh
            main_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(main_text, 'tStartRefresh')  # time at next scr refresh
            # update status
            main_text.status = STARTED
            main_text.setAutoDraw(True)
        
        # if main_text is active this frame...
        if main_text.status == STARTED:
            # update params
            pass
        
        # *gomain* updates
        waitOnFlip = False
        
        # if gomain is starting this frame...
        if gomain.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            gomain.frameNStart = frameN  # exact frame index
            gomain.tStart = t  # local t and not account for scr refresh
            gomain.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(gomain, 'tStartRefresh')  # time at next scr refresh
            # update status
            gomain.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(gomain.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(gomain.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if gomain.status == STARTED and not waitOnFlip:
            theseKeys = gomain.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _gomain_allKeys.extend(theseKeys)
            if len(_gomain_allKeys):
                gomain.keys = _gomain_allKeys[-1].name  # just the last key pressed
                gomain.rt = _gomain_allKeys[-1].rt
                gomain.duration = _gomain_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, inputs=inputs, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in main_instrComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "main_instr" ---
    for thisComponent in main_instrComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "main_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    main_loop = data.TrialHandler(nReps=90.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='main_loop')
    thisExp.addLoop(main_loop)  # add the loop to the experiment
    thisMain_loop = main_loop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisMain_loop.rgb)
    if thisMain_loop != None:
        for paramName in thisMain_loop:
            globals()[paramName] = thisMain_loop[paramName]
    
    for thisMain_loop in main_loop:
        currentLoop = main_loop
        thisExp.timestampOnFlip(win, 'thisRow.t')
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                inputs=inputs, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
        )
        # abbreviate parameter names if possible (e.g. rgb = thisMain_loop.rgb)
        if thisMain_loop != None:
            for paramName in thisMain_loop:
                globals()[paramName] = thisMain_loop[paramName]
        
        # --- Prepare to start Routine "main_search_task" ---
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code1
        #номер целевого сстимула из списка тестовых стимулов
        test_ind = random.choice(test_ind_seq)
        
        #выбираем целевой стимул
        test = test_order[test_ind]
        matrix_type = matrix_seq[test_ind]
        instruction = df.iloc[test-1]['descr']
        main_search_text.setText("Я бы хотел ...\n\n"+instruction)
        main_go_search.keys = []
        main_go_search.rt = []
        _main_go_search_allKeys = []
        # keep track of which components have finished
        main_search_taskComponents = [main_search_text, main_go_search, space_instr]
        for thisComponent in main_search_taskComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "main_search_task" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *main_search_text* updates
            
            # if main_search_text is starting this frame...
            if main_search_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                main_search_text.frameNStart = frameN  # exact frame index
                main_search_text.tStart = t  # local t and not account for scr refresh
                main_search_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(main_search_text, 'tStartRefresh')  # time at next scr refresh
                # update status
                main_search_text.status = STARTED
                main_search_text.setAutoDraw(True)
            
            # if main_search_text is active this frame...
            if main_search_text.status == STARTED:
                # update params
                pass
            
            # *main_go_search* updates
            waitOnFlip = False
            
            # if main_go_search is starting this frame...
            if main_go_search.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                main_go_search.frameNStart = frameN  # exact frame index
                main_go_search.tStart = t  # local t and not account for scr refresh
                main_go_search.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(main_go_search, 'tStartRefresh')  # time at next scr refresh
                # update status
                main_go_search.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(main_go_search.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(main_go_search.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if main_go_search.status == STARTED and not waitOnFlip:
                theseKeys = main_go_search.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                _main_go_search_allKeys.extend(theseKeys)
                if len(_main_go_search_allKeys):
                    main_go_search.keys = _main_go_search_allKeys[-1].name  # just the last key pressed
                    main_go_search.rt = _main_go_search_allKeys[-1].rt
                    main_go_search.duration = _main_go_search_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # *space_instr* updates
            
            # if space_instr is starting this frame...
            if space_instr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                space_instr.frameNStart = frameN  # exact frame index
                space_instr.tStart = t  # local t and not account for scr refresh
                space_instr.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(space_instr, 'tStartRefresh')  # time at next scr refresh
                # update status
                space_instr.status = STARTED
                space_instr.setAutoDraw(True)
            
            # if space_instr is active this frame...
            if space_instr.status == STARTED:
                # update params
                pass
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, inputs=inputs, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in main_search_taskComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "main_search_task" ---
        for thisComponent in main_search_taskComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "main_search_task" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "main_trial" ---
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_main
        #Генерируем список дистракторов из всех стимулов
        probe_list = list(range(1, 41))
        probe_list.remove(test)
        
        #выбираем тип матрицыv и номера дистракторов
        if matrix_type == 1:
            matrix_positions = positions_3x3
            dist_list= random.sample(probe_list, 8)
        elif matrix_type == 2:
            matrix_positions = positions_4x4
            dist_list= random.sample(probe_list, 15)
        else:
            matrix_positions = positions_5x5
            dist_list= random.sample(probe_list, 24)
        
        #Выбираем позицию для целевого стимула
        test_position = random.choice(matrix_positions)
        
        #Выбираем оставляем позиции для дистракторов
        dist_position = matrix_positions[:]
        dist_position.remove(test_position)
        
        target.setPos((test_position[0], test_position[1]))
        target.setImage(str(test)+design+'.png')
        distr_1.setPos((dist_position[0][0], dist_position[0][1]))
        distr_1.setImage(str(dist_list[0])+design+'.png' )
        distr_2.setPos((dist_position[1][0], dist_position[1][1]))
        distr_2.setImage(str(dist_list[1])+design+'.png')
        distr_3.setPos((dist_position[2][0], dist_position[2][1]))
        distr_3.setImage(str(dist_list[2])+design+'.png')
        distr_4.setPos((dist_position[3][0], dist_position[3][1]))
        distr_4.setImage(str(dist_list[3])+design+'.png')
        distr_5.setPos((dist_position[4][0], dist_position[4][1]))
        distr_5.setImage(str(dist_list[4])+design+'.png')
        distr_6.setPos((dist_position[5][0], dist_position[5][1]))
        distr_6.setImage(str(dist_list[5])+design+'.png')
        distr_7.setPos((dist_position[6][0], dist_position[6][1]))
        distr_7.setImage(str(dist_list[6])+design+'.png')
        distr_8.setPos((dist_position[7][0], dist_position[7][1]))
        distr_8.setImage(str(dist_list[7])+design+'.png')
        distr_9.setPos((dist_position[8][0], dist_position[8][1]) if matrix_type >= 2 else (-960, -540))
        distr_9.setImage(str(dist_list[8])+design+'.png' if matrix_type >= 2 else '1.png')
        distr_10.setPos((dist_position[9][0], dist_position[9][1]) if matrix_type >= 2 else (-960, -540))
        distr_10.setImage(str(dist_list[9])+design+'.png' if matrix_type >= 2 else '1.png')
        distr_11.setPos((dist_position[10][0], dist_position[10][1]) if matrix_type >= 2 else (-960, -540))
        distr_11.setImage(str(dist_list[10])+design+'.png' if matrix_type >= 2 else '1.png')
        distr_12.setPos((dist_position[11][0], dist_position[11][1]) if matrix_type >= 2 else (-960, -540))
        distr_12.setImage(str(dist_list[11])+design+'.png' if matrix_type >= 2 else '1.png')
        distr_13.setPos((dist_position[12][0], dist_position[12][1]) if matrix_type >= 2 else (-960, -540))
        distr_13.setImage(str(dist_list[12])+design+'.png' if matrix_type >= 2 else '1.png')
        distr_14.setPos((dist_position[13][0], dist_position[13][1]) if matrix_type >= 2 else (-960, -540))
        distr_14.setImage(str(dist_list[13])+design+'.png' if matrix_type >= 2 else '1.png')
        distr_15.setPos((dist_position[14][0], dist_position[14][1]) if matrix_type >= 2 else (-960, -540))
        distr_15.setImage(str(dist_list[14])+design+'.png' if matrix_type >= 2 else '1.png')
        distr_16.setPos((dist_position[15][0], dist_position[15][1]) if matrix_type >= 3 else (-960, -540))
        distr_16.setImage(str(dist_list[15])+design+'.png' if matrix_type >= 3 else '1.png')
        distr_17.setPos((dist_position[16][0], dist_position[16][1]) if matrix_type >= 3 else (-960, -540))
        distr_17.setImage(str(dist_list[16])+design+'.png' if matrix_type >= 3 else '1.png')
        distr_18.setPos((dist_position[17][0], dist_position[17][1]) if matrix_type >= 3 else (-960, -540))
        distr_18.setImage(str(dist_list[17])+design+'.png' if matrix_type >= 3 else '1.png')
        distr_19.setPos((dist_position[18][0], dist_position[18][1]) if matrix_type >= 3 else (-960, -540))
        distr_19.setImage(str(dist_list[18])+design+'.png' if matrix_type >= 3 else '1.png')
        distr_20.setPos((dist_position[19][0], dist_position[19][1]) if matrix_type >= 3 else (-960, -540))
        distr_20.setImage(str(dist_list[19])+design+'.png' if matrix_type >= 3 else '1.png')
        distr_21.setPos((dist_position[20][0], dist_position[20][1]) if matrix_type >= 3 else (-960, -540))
        distr_21.setImage(str(dist_list[20])+design+'.png' if matrix_type >= 3 else '1.png')
        distr_22.setPos((dist_position[21][0], dist_position[21][1]) if matrix_type >= 3 else (-960, -540))
        distr_22.setImage(str(dist_list[21])+design+'.png' if matrix_type >= 3 else '1.png')
        distr_23.setPos((dist_position[22][0], dist_position[22][1]) if matrix_type >= 3 else (-960, -540))
        distr_23.setImage(str(dist_list[22])+design+'.png' if matrix_type >= 3 else '1.png')
        distr_24.setPos((dist_position[23][0], dist_position[23][1]) if matrix_type >= 3 else (-960, -540))
        distr_24.setImage(str(dist_list[23])+design+'.png' if matrix_type >= 3 else '1.png')
        # setup some python lists for storing info about the chose_targ
        chose_targ.x = []
        chose_targ.y = []
        chose_targ.leftButton = []
        chose_targ.midButton = []
        chose_targ.rightButton = []
        chose_targ.time = []
        chose_targ.corr = []
        chose_targ.clicked_name = []
        chose_targ.clicked_pos = []
        gotValidClick = False  # until a click is received
        # keep track of which components have finished
        main_trialComponents = [target, distr_1, distr_2, distr_3, distr_4, distr_5, distr_6, distr_7, distr_8, distr_9, distr_10, distr_11, distr_12, distr_13, distr_14, distr_15, distr_16, distr_17, distr_18, distr_19, distr_20, distr_21, distr_22, distr_23, distr_24, chose_targ]
        for thisComponent in main_trialComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "main_trial" ---
        routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *target* updates
            
            # if target is starting this frame...
            if target.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                target.frameNStart = frameN  # exact frame index
                target.tStart = t  # local t and not account for scr refresh
                target.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(target, 'tStartRefresh')  # time at next scr refresh
                # update status
                target.status = STARTED
                target.setAutoDraw(True)
            
            # if target is active this frame...
            if target.status == STARTED:
                # update params
                pass
            
            # *distr_1* updates
            
            # if distr_1 is starting this frame...
            if distr_1.status == NOT_STARTED and matrix_type >= 1:
                # keep track of start time/frame for later
                distr_1.frameNStart = frameN  # exact frame index
                distr_1.tStart = t  # local t and not account for scr refresh
                distr_1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(distr_1, 'tStartRefresh')  # time at next scr refresh
                # update status
                distr_1.status = STARTED
                distr_1.setAutoDraw(True)
            
            # if distr_1 is active this frame...
            if distr_1.status == STARTED:
                # update params
                pass
            
            # *distr_2* updates
            
            # if distr_2 is starting this frame...
            if distr_2.status == NOT_STARTED and matrix_type >= 1:
                # keep track of start time/frame for later
                distr_2.frameNStart = frameN  # exact frame index
                distr_2.tStart = t  # local t and not account for scr refresh
                distr_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(distr_2, 'tStartRefresh')  # time at next scr refresh
                # update status
                distr_2.status = STARTED
                distr_2.setAutoDraw(True)
            
            # if distr_2 is active this frame...
            if distr_2.status == STARTED:
                # update params
                pass
            
            # *distr_3* updates
            
            # if distr_3 is starting this frame...
            if distr_3.status == NOT_STARTED and matrix_type >= 1:
                # keep track of start time/frame for later
                distr_3.frameNStart = frameN  # exact frame index
                distr_3.tStart = t  # local t and not account for scr refresh
                distr_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(distr_3, 'tStartRefresh')  # time at next scr refresh
                # update status
                distr_3.status = STARTED
                distr_3.setAutoDraw(True)
            
            # if distr_3 is active this frame...
            if distr_3.status == STARTED:
                # update params
                pass
            
            # *distr_4* updates
            
            # if distr_4 is starting this frame...
            if distr_4.status == NOT_STARTED and matrix_type >= 1:
                # keep track of start time/frame for later
                distr_4.frameNStart = frameN  # exact frame index
                distr_4.tStart = t  # local t and not account for scr refresh
                distr_4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(distr_4, 'tStartRefresh')  # time at next scr refresh
                # update status
                distr_4.status = STARTED
                distr_4.setAutoDraw(True)
            
            # if distr_4 is active this frame...
            if distr_4.status == STARTED:
                # update params
                pass
            
            # *distr_5* updates
            
            # if distr_5 is starting this frame...
            if distr_5.status == NOT_STARTED and matrix_type >= 1:
                # keep track of start time/frame for later
                distr_5.frameNStart = frameN  # exact frame index
                distr_5.tStart = t  # local t and not account for scr refresh
                distr_5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(distr_5, 'tStartRefresh')  # time at next scr refresh
                # update status
                distr_5.status = STARTED
                distr_5.setAutoDraw(True)
            
            # if distr_5 is active this frame...
            if distr_5.status == STARTED:
                # update params
                pass
            
            # *distr_6* updates
            
            # if distr_6 is starting this frame...
            if distr_6.status == NOT_STARTED and matrix_type >= 1:
                # keep track of start time/frame for later
                distr_6.frameNStart = frameN  # exact frame index
                distr_6.tStart = t  # local t and not account for scr refresh
                distr_6.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(distr_6, 'tStartRefresh')  # time at next scr refresh
                # update status
                distr_6.status = STARTED
                distr_6.setAutoDraw(True)
            
            # if distr_6 is active this frame...
            if distr_6.status == STARTED:
                # update params
                pass
            
            # *distr_7* updates
            
            # if distr_7 is starting this frame...
            if distr_7.status == NOT_STARTED and matrix_type >= 1:
                # keep track of start time/frame for later
                distr_7.frameNStart = frameN  # exact frame index
                distr_7.tStart = t  # local t and not account for scr refresh
                distr_7.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(distr_7, 'tStartRefresh')  # time at next scr refresh
                # update status
                distr_7.status = STARTED
                distr_7.setAutoDraw(True)
            
            # if distr_7 is active this frame...
            if distr_7.status == STARTED:
                # update params
                pass
            
            # *distr_8* updates
            
            # if distr_8 is starting this frame...
            if distr_8.status == NOT_STARTED and matrix_type >= 1:
                # keep track of start time/frame for later
                distr_8.frameNStart = frameN  # exact frame index
                distr_8.tStart = t  # local t and not account for scr refresh
                distr_8.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(distr_8, 'tStartRefresh')  # time at next scr refresh
                # update status
                distr_8.status = STARTED
                distr_8.setAutoDraw(True)
            
            # if distr_8 is active this frame...
            if distr_8.status == STARTED:
                # update params
                pass
            
            # *distr_9* updates
            
            # if distr_9 is starting this frame...
            if distr_9.status == NOT_STARTED and matrix_type >= 2:
                # keep track of start time/frame for later
                distr_9.frameNStart = frameN  # exact frame index
                distr_9.tStart = t  # local t and not account for scr refresh
                distr_9.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(distr_9, 'tStartRefresh')  # time at next scr refresh
                # update status
                distr_9.status = STARTED
                distr_9.setAutoDraw(True)
            
            # if distr_9 is active this frame...
            if distr_9.status == STARTED:
                # update params
                pass
            
            # *distr_10* updates
            
            # if distr_10 is starting this frame...
            if distr_10.status == NOT_STARTED and matrix_type >= 2:
                # keep track of start time/frame for later
                distr_10.frameNStart = frameN  # exact frame index
                distr_10.tStart = t  # local t and not account for scr refresh
                distr_10.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(distr_10, 'tStartRefresh')  # time at next scr refresh
                # update status
                distr_10.status = STARTED
                distr_10.setAutoDraw(True)
            
            # if distr_10 is active this frame...
            if distr_10.status == STARTED:
                # update params
                pass
            
            # *distr_11* updates
            
            # if distr_11 is starting this frame...
            if distr_11.status == NOT_STARTED and matrix_type >= 2:
                # keep track of start time/frame for later
                distr_11.frameNStart = frameN  # exact frame index
                distr_11.tStart = t  # local t and not account for scr refresh
                distr_11.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(distr_11, 'tStartRefresh')  # time at next scr refresh
                # update status
                distr_11.status = STARTED
                distr_11.setAutoDraw(True)
            
            # if distr_11 is active this frame...
            if distr_11.status == STARTED:
                # update params
                pass
            
            # *distr_12* updates
            
            # if distr_12 is starting this frame...
            if distr_12.status == NOT_STARTED and matrix_type >= 2:
                # keep track of start time/frame for later
                distr_12.frameNStart = frameN  # exact frame index
                distr_12.tStart = t  # local t and not account for scr refresh
                distr_12.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(distr_12, 'tStartRefresh')  # time at next scr refresh
                # update status
                distr_12.status = STARTED
                distr_12.setAutoDraw(True)
            
            # if distr_12 is active this frame...
            if distr_12.status == STARTED:
                # update params
                pass
            
            # *distr_13* updates
            
            # if distr_13 is starting this frame...
            if distr_13.status == NOT_STARTED and matrix_type >= 2:
                # keep track of start time/frame for later
                distr_13.frameNStart = frameN  # exact frame index
                distr_13.tStart = t  # local t and not account for scr refresh
                distr_13.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(distr_13, 'tStartRefresh')  # time at next scr refresh
                # update status
                distr_13.status = STARTED
                distr_13.setAutoDraw(True)
            
            # if distr_13 is active this frame...
            if distr_13.status == STARTED:
                # update params
                pass
            
            # *distr_14* updates
            
            # if distr_14 is starting this frame...
            if distr_14.status == NOT_STARTED and matrix_type >= 2:
                # keep track of start time/frame for later
                distr_14.frameNStart = frameN  # exact frame index
                distr_14.tStart = t  # local t and not account for scr refresh
                distr_14.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(distr_14, 'tStartRefresh')  # time at next scr refresh
                # update status
                distr_14.status = STARTED
                distr_14.setAutoDraw(True)
            
            # if distr_14 is active this frame...
            if distr_14.status == STARTED:
                # update params
                pass
            
            # *distr_15* updates
            
            # if distr_15 is starting this frame...
            if distr_15.status == NOT_STARTED and matrix_type >= 2:
                # keep track of start time/frame for later
                distr_15.frameNStart = frameN  # exact frame index
                distr_15.tStart = t  # local t and not account for scr refresh
                distr_15.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(distr_15, 'tStartRefresh')  # time at next scr refresh
                # update status
                distr_15.status = STARTED
                distr_15.setAutoDraw(True)
            
            # if distr_15 is active this frame...
            if distr_15.status == STARTED:
                # update params
                pass
            
            # *distr_16* updates
            
            # if distr_16 is starting this frame...
            if distr_16.status == NOT_STARTED and matrix_type >= 3:
                # keep track of start time/frame for later
                distr_16.frameNStart = frameN  # exact frame index
                distr_16.tStart = t  # local t and not account for scr refresh
                distr_16.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(distr_16, 'tStartRefresh')  # time at next scr refresh
                # update status
                distr_16.status = STARTED
                distr_16.setAutoDraw(True)
            
            # if distr_16 is active this frame...
            if distr_16.status == STARTED:
                # update params
                pass
            
            # *distr_17* updates
            
            # if distr_17 is starting this frame...
            if distr_17.status == NOT_STARTED and matrix_type >= 3:
                # keep track of start time/frame for later
                distr_17.frameNStart = frameN  # exact frame index
                distr_17.tStart = t  # local t and not account for scr refresh
                distr_17.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(distr_17, 'tStartRefresh')  # time at next scr refresh
                # update status
                distr_17.status = STARTED
                distr_17.setAutoDraw(True)
            
            # if distr_17 is active this frame...
            if distr_17.status == STARTED:
                # update params
                pass
            
            # *distr_18* updates
            
            # if distr_18 is starting this frame...
            if distr_18.status == NOT_STARTED and matrix_type >= 3:
                # keep track of start time/frame for later
                distr_18.frameNStart = frameN  # exact frame index
                distr_18.tStart = t  # local t and not account for scr refresh
                distr_18.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(distr_18, 'tStartRefresh')  # time at next scr refresh
                # update status
                distr_18.status = STARTED
                distr_18.setAutoDraw(True)
            
            # if distr_18 is active this frame...
            if distr_18.status == STARTED:
                # update params
                pass
            
            # *distr_19* updates
            
            # if distr_19 is starting this frame...
            if distr_19.status == NOT_STARTED and matrix_type >= 3:
                # keep track of start time/frame for later
                distr_19.frameNStart = frameN  # exact frame index
                distr_19.tStart = t  # local t and not account for scr refresh
                distr_19.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(distr_19, 'tStartRefresh')  # time at next scr refresh
                # update status
                distr_19.status = STARTED
                distr_19.setAutoDraw(True)
            
            # if distr_19 is active this frame...
            if distr_19.status == STARTED:
                # update params
                pass
            
            # *distr_20* updates
            
            # if distr_20 is starting this frame...
            if distr_20.status == NOT_STARTED and matrix_type >= 3:
                # keep track of start time/frame for later
                distr_20.frameNStart = frameN  # exact frame index
                distr_20.tStart = t  # local t and not account for scr refresh
                distr_20.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(distr_20, 'tStartRefresh')  # time at next scr refresh
                # update status
                distr_20.status = STARTED
                distr_20.setAutoDraw(True)
            
            # if distr_20 is active this frame...
            if distr_20.status == STARTED:
                # update params
                pass
            
            # *distr_21* updates
            
            # if distr_21 is starting this frame...
            if distr_21.status == NOT_STARTED and matrix_type >= 3:
                # keep track of start time/frame for later
                distr_21.frameNStart = frameN  # exact frame index
                distr_21.tStart = t  # local t and not account for scr refresh
                distr_21.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(distr_21, 'tStartRefresh')  # time at next scr refresh
                # update status
                distr_21.status = STARTED
                distr_21.setAutoDraw(True)
            
            # if distr_21 is active this frame...
            if distr_21.status == STARTED:
                # update params
                pass
            
            # *distr_22* updates
            
            # if distr_22 is starting this frame...
            if distr_22.status == NOT_STARTED and matrix_type >= 3:
                # keep track of start time/frame for later
                distr_22.frameNStart = frameN  # exact frame index
                distr_22.tStart = t  # local t and not account for scr refresh
                distr_22.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(distr_22, 'tStartRefresh')  # time at next scr refresh
                # update status
                distr_22.status = STARTED
                distr_22.setAutoDraw(True)
            
            # if distr_22 is active this frame...
            if distr_22.status == STARTED:
                # update params
                pass
            
            # *distr_23* updates
            
            # if distr_23 is starting this frame...
            if distr_23.status == NOT_STARTED and matrix_type >= 3:
                # keep track of start time/frame for later
                distr_23.frameNStart = frameN  # exact frame index
                distr_23.tStart = t  # local t and not account for scr refresh
                distr_23.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(distr_23, 'tStartRefresh')  # time at next scr refresh
                # update status
                distr_23.status = STARTED
                distr_23.setAutoDraw(True)
            
            # if distr_23 is active this frame...
            if distr_23.status == STARTED:
                # update params
                pass
            
            # *distr_24* updates
            
            # if distr_24 is starting this frame...
            if distr_24.status == NOT_STARTED and matrix_type >= 3:
                # keep track of start time/frame for later
                distr_24.frameNStart = frameN  # exact frame index
                distr_24.tStart = t  # local t and not account for scr refresh
                distr_24.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(distr_24, 'tStartRefresh')  # time at next scr refresh
                # update status
                distr_24.status = STARTED
                distr_24.setAutoDraw(True)
            
            # if distr_24 is active this frame...
            if distr_24.status == STARTED:
                # update params
                pass
            # *chose_targ* updates
            
            # if chose_targ is starting this frame...
            if chose_targ.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                chose_targ.frameNStart = frameN  # exact frame index
                chose_targ.tStart = t  # local t and not account for scr refresh
                chose_targ.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(chose_targ, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.addData('chose_targ.started', t)
                # update status
                chose_targ.status = STARTED
                chose_targ.mouseClock.reset()
                prevButtonState = chose_targ.getPressed()  # if button is down already this ISN'T a new click
            if chose_targ.status == STARTED:  # only update if started and not finished!
                buttons = chose_targ.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        clickableList = environmenttools.getFromNames([target, distr_1, distr_2, distr_3, distr_4, distr_5, distr_6, distr_7, distr_8, distr_9, distr_10, distr_11, distr_12, distr_13, distr_14, distr_15, distr_16, distr_17, distr_18, distr_19, distr_20, distr_21, distr_22, distr_23, distr_24], namespace=locals())
                        for obj in clickableList:
                            # is this object clicked on?
                            if obj.contains(chose_targ):
                                gotValidClick = True
                                chose_targ.clicked_name.append(obj.name)
                                chose_targ.clicked_pos.append(obj.pos)
                        # check whether click was in correct object
                        if gotValidClick:
                            corr = 0
                            corrAns = environmenttools.getFromNames(target, namespace=locals())
                            for obj in corrAns:
                                # is this object clicked on?
                                if obj.contains(chose_targ):
                                    corr = 1
                            chose_targ.corr.append(corr)
                        if gotValidClick:
                            x, y = chose_targ.getPos()
                            chose_targ.x.append(x)
                            chose_targ.y.append(y)
                            buttons = chose_targ.getPressed()
                            chose_targ.leftButton.append(buttons[0])
                            chose_targ.midButton.append(buttons[1])
                            chose_targ.rightButton.append(buttons[2])
                            chose_targ.time.append(chose_targ.mouseClock.getTime())
                        if gotValidClick:
                            continueRoutine = False  # end routine on response
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, inputs=inputs, win=win)
                return
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in main_trialComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "main_trial" ---
        for thisComponent in main_trialComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # Run 'End Routine' code from code_main
        #Добавляем данные о пробе
        thisExp.addData('test_indicator', test_ind)
        thisExp.addData('stim_name', df.iloc[test-1]['name'])
        thisExp.addData('stim_id', df.iloc[test-1]['id'])
        thisExp.addData('stim_descr', instruction)
        thisExp.addData('stim_fav', df.iloc[test-1]['fav'])
        thisExp.addData('stim_freq', df.iloc[test-1]['freq'])
        thisExp.addData('matrix_type', matrix_type)
        thisExp.addData('taget_posititon', test_position)
        #Переходим к слкдующему стимулу
        test_ind_seq.remove(test_ind)
        # store data for main_loop (TrialHandler)
        main_loop.addData('chose_targ.x', chose_targ.x)
        main_loop.addData('chose_targ.y', chose_targ.y)
        main_loop.addData('chose_targ.leftButton', chose_targ.leftButton)
        main_loop.addData('chose_targ.midButton', chose_targ.midButton)
        main_loop.addData('chose_targ.rightButton', chose_targ.rightButton)
        main_loop.addData('chose_targ.time', chose_targ.time)
        main_loop.addData('chose_targ.corr', chose_targ.corr)
        main_loop.addData('chose_targ.clicked_name', chose_targ.clicked_name)
        main_loop.addData('chose_targ.clicked_pos', chose_targ.clicked_pos)
        # the Routine "main_trial" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
    # completed 90.0 repeats of 'main_loop'
    
    
    # --- Prepare to start Routine "outro" ---
    continueRoutine = True
    # update component parameters for each repeat
    end_space.keys = []
    end_space.rt = []
    _end_space_allKeys = []
    # keep track of which components have finished
    outroComponents = [text_2, end_space]
    for thisComponent in outroComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "outro" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_2* updates
        
        # if text_2 is starting this frame...
        if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_2.frameNStart = frameN  # exact frame index
            text_2.tStart = t  # local t and not account for scr refresh
            text_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
            # update status
            text_2.status = STARTED
            text_2.setAutoDraw(True)
        
        # if text_2 is active this frame...
        if text_2.status == STARTED:
            # update params
            pass
        
        # *end_space* updates
        waitOnFlip = False
        
        # if end_space is starting this frame...
        if end_space.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            end_space.frameNStart = frameN  # exact frame index
            end_space.tStart = t  # local t and not account for scr refresh
            end_space.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(end_space, 'tStartRefresh')  # time at next scr refresh
            # update status
            end_space.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(end_space.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(end_space.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if end_space.status == STARTED and not waitOnFlip:
            theseKeys = end_space.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _end_space_allKeys.extend(theseKeys)
            if len(_end_space_allKeys):
                end_space.keys = _end_space_allKeys[-1].name  # just the last key pressed
                end_space.rt = _end_space_allKeys[-1].rt
                end_space.duration = _end_space_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, inputs=inputs, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in outroComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "outro" ---
    for thisComponent in outroComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "outro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # mark experiment as finished
    endExperiment(thisExp, win=win, inputs=inputs)


def saveData(thisExp):
    """
    Save data from this experiment
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    filename = thisExp.dataFileName
    # these shouldn't be strictly necessary (should auto-save)
    thisExp.saveAsWideText(filename + '.csv', delim='auto')
    thisExp.saveAsPickle(filename)


def endExperiment(thisExp, inputs=None, win=None):
    """
    End this experiment, performing final shut down operations.
    
    This function does NOT close the window or end the Python process - use `quit` for this.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    inputs : dict
        Dictionary of input devices by name.
    win : psychopy.visual.Window
        Window for this experiment.
    """
    if win is not None:
        # remove autodraw from all current components
        win.clearAutoDraw()
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed
        win.flip()
    # mark experiment handler as finished
    thisExp.status = FINISHED
    # shut down eyetracker, if there is one
    if inputs is not None:
        if 'eyetracker' in inputs and inputs['eyetracker'] is not None:
            inputs['eyetracker'].setConnectionState(False)
    logging.flush()


def quit(thisExp, win=None, inputs=None, thisSession=None):
    """
    Fully quit, closing the window and ending the Python process.
    
    Parameters
    ==========
    win : psychopy.visual.Window
        Window to close.
    inputs : dict
        Dictionary of input devices by name.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    thisExp.abort()  # or data files will save again on exit
    # make sure everything is closed down
    if win is not None:
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed before quitting
        win.flip()
        win.close()
    if inputs is not None:
        if 'eyetracker' in inputs and inputs['eyetracker'] is not None:
            inputs['eyetracker'].setConnectionState(False)
    logging.flush()
    if thisSession is not None:
        thisSession.stop()
    # terminate Python process
    core.quit()


# if running this experiment as a script...
if __name__ == '__main__':
    # call all functions in order
    expInfo = showExpInfoDlg(expInfo=expInfo)
    thisExp = setupData(expInfo=expInfo)
    logFile = setupLogging(filename=thisExp.dataFileName)
    win = setupWindow(expInfo=expInfo)
    inputs = setupInputs(expInfo=expInfo, thisExp=thisExp, win=win)
    run(
        expInfo=expInfo, 
        thisExp=thisExp, 
        win=win, 
        inputs=inputs
    )
    saveData(thisExp=thisExp)
    quit(thisExp=thisExp, win=win, inputs=inputs)
