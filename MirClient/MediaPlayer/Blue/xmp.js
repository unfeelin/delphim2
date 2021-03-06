//所有动作在js里面

var g_InitTimerId = 0;
var g_ClickTimerId = 0;
var g_ClickFlags = 0 ;

// 皮肤库回调函数
function OnInit()
{			
	
	XLUIManager.Trace("JS::OnInit Start");
   	DataCenter.DisableUpdateWindowSize=true ;
   	XmpPlayerContainer.AttachEvent("OnPlayStatusChanged", "OnPlayStatusChanged");
    XmpPlayerContainer.AttachEvent("OnFilmDurationChanged", "OnFilmDurationChanged");
    XmpPlayerContainer.AttachEvent("OnPlayProgressChanged", "OnPlayProgressChanged");
    XmpPlayerContainer.AttachEvent("OnDownloadProgressChanged", "OnDownloadProgressChanged");
   	XmpPlayerContainer.AttachEvent("OnCtrlButtonEnableChanged", "OnCtrlButtonEnableChanged");    
  	XmpPlayerContainer.AttachEvent("OnTabViewAddRemoveChanged", "OnTabViewAddRemoveChanged");   	
    XmpPlayerContainer.AttachEvent("OnTabViewEnableChanged", "OnTabViewEnableChanged");
    XmpPlayerContainer.AttachEvent("OnTabViewSelectChanged", "OnTabViewSelectChanged"); 
    XmpPlayerContainer.AttachEvent("OnBufferProgressChanged", "OnBufferProgressChanged"); 
    XmpPlayerContainer.AttachEvent("OnPlayBarStatusChanged", "OnPlayBarStatusChanged");
    XmpPlayerContainer.AttachEvent("OnAutoShutdownStatusChanged", "OnAutoShutdownStatusChanged");
    XmpPlayerContainer.AttachEvent("OnSilentStatusChanged", "OnSilentStatusChanged");
    XmpPlayerContainer.AttachEvent("OnAddRecentFile", "OnAddRecentFile");
    XmpPlayerContainer.AttachEvent("OnTopmostStatusChanged", "OnTopmostStatusChanged");  
    XmpPlayerContainer.AttachEvent("OnAdjustRecentFile", "OnAdjustRecentFile");  
    XmpPlayerContainer.AttachEvent("OnClearRecentFiles", "OnClearRecentFiles"); 
    XmpPlayerContainer.AttachEvent("OnRecordStatusChanged", "OnRecordStatusChanged"); 
    XmpPlayerContainer.AttachEvent("OnPopupVideoWndMenu", "OnPopupVideoWndMenu"); 
    XmpPlayerContainer.AttachEvent("OnTitleChanged", "OnTitleChanged"); 
    XmpPlayerContainer.AttachEvent("OnScreenStatusChanged", "OnScreenStatusChanged");
    XmpPlayerContainer.AttachEvent("OnVolumeChanged", "OnVolumeChanged");     
    XmpPlayerContainer.AttachEvent("OnTopBarStatusChanged", "OnTopBarStatusChanged");
    XmpPlayerContainer.AttachEvent("OnMiniCtrlBarStatusChanged", "OnMiniCtrlBarStatusChanged");
    XmpPlayerContainer.AttachEvent("OnPlayTitleChanged", "OnPlayTitleChanged");           
    XmpPlayerContainer.AttachEvent("OnPublisherChanged", "OnPublisherChanged");
    XmpPlayerContainer.AttachEvent("OnBitRateChanged", "OnBitRateChanged");    
    XmpPlayerContainer.AttachEvent("OnShowPlaylist", "OnShowPlaylist");
  	XmpPlayerContainer.AttachEvent("OnMenuHotkeyChanged", "OnMenuHotkeyChanged");    
   	XmpPlayerContainer.AttachEvent("OnExpandRightSideChanged", "OnExpandRightSideChanged");
   	XmpPlayerContainer.AttachEvent("OnShowMessageBox", "OnShowMessageBox");
   	XmpPlayerContainer.AttachEvent("OnShowMediaInfo", "OnShowMediaInfo");
   	XmpPlayerContainer.AttachEvent("OnResizePlaySilder", "OnResizePlaySilder");
   	XmpPlayerContainer.AttachEvent("OnShowAutoShutDownMsgBox", "OnShowAutoShutDownMsgBox");
   	XmpPlayerContainer.AttachEvent("OnBrightSetableChange", "OnBrightSetableChange");
   	XmpPlayerContainer.AttachEvent("OnFlashTopBar", "OnFlashTopBar");
   	XmpPlayerContainer.AttachEvent("OnReceiveCmdLine", "OnReceiveCmdLine");
   	XmpPlayerContainer.AttachEvent("OnOpenDVD","OnOpenDVD");
   	XmpPlayerContainer.AttachEvent("OnBosskey","OnBosskey");
   	XmpPlayerContainer.AttachEvent("OnShowConfigWnd","OnShowConfigWnd");	 		
   	
    traymanager._maintray.visible = true;
   
		var left   = XLUIManager.LoadParam("MainWndLeft");
	    var top    = XLUIManager.LoadParam("MainWndTop");
	    var width  = XLUIManager.LoadParam("MainWndWidth");
	    var Height = XLUIManager.LoadParam("MainWndHeight");
	    var state  = XLUIManager.LoadParam("MainWndState");
	    
	    var bListShow = XLUIManager.LoadParam("PlaylistSatus");
	    XLUIManager.Trace("LoadPlayListShow : "+bListShow);
	    
	    var bExpandList = XLUIManager.LoadParam("PlaylistExpandSatus");
	    
	    if (state == "" || state =="3")
			{
				XmpMainWnd.windowstate = 1;
			}
			else if (state == 2)
			{
				XmpMainWnd.windowstate = state;
			}
			else if(state !="3" && left != "" && top != "" && width != "" && Height != "")
	    {
	    	XmpMainWnd.Move(left, top, width, Height);
	    }
	    
	    var sw = global.GetScreenWidth();
			var sh = global.GetScreenHeight();
			if(XmpMainWnd.left>=sw || XmpMainWnd.left+XmpMainWnd.width<=0 || XmpMainWnd.top>=sh || XmpMainWnd.top+XmpMainWnd.height<=0)
			{
				XmpMainWnd.CenterWindow();
			}
	    
	    if(DataCenter.IsFirstInit)
			{
	  		PlaylistView.InitView(PlaylistViewContainer.handle);
	  		if(bListShow=="True")
	  			DataCenter.IsListShow=true;
	  		else
	  			DataCenter.IsListShow=false;
	  		if(bExpandList=="True")
	  			DataCenter.IsExpandRightSide=true;
	  		else
	  			DataCenter.IsExpandRightSide=false;
	  			
	  		XLUIManager.Trace("JS::OnInit::PlaylistStatus : show="+DataCenter.IsListShow+",expand="+DataCenter.IsExpandRightSide);
	  		
	  		XmpMainWnd.minwidth = 606;	
	  		if(DataCenter.IsListShow && DataCenter.IsExpandRightSide)
	  		XmpMainWnd.minwidth = 606+ 172 ;
	  		
	  		XmpExpandBar.SetParent(XmpMainWnd);
				XmpExpandBar.Move(parseInt(XmpMainWnd.width) - 6, parseInt(XmpMainWnd.height)/2 - 12, 4, 25);
	  		XMP.view_ExpandBar._UpdateExpandBar();
	  		
	  		if(DataCenter.IsListShow)
	  		{
	  			btnShowPlaylist.visible = false ;
	  			btnHidePlaylist.visible = true ;
	  		}
	  		else
	  		{
	  			btnShowPlaylist.visible = true ;
	  			btnHidePlaylist.visible = false ;
	  		}
	  	}
	  
	  XmpConfigWnd.ActivateView(XmpMainWnd); 
	  XmpConfig.OnConnection2(XmpConfigContainer.handle);  
	  
	  XmpPlayer.SetXmpConfigMgrObj(XmpConfig);
	  XmpPlayer.OnConnection(XmpPlayerContainer.handle, XmpMainWnd.handle);
	  
	  DataCenter.DisableUpdateWindowSize=false ;
	  XMP.WindowMode.UpdateWindowSize();
	  XmpPlayerContainer.Show(); 
	  
	  XmpPlayer.SetSearchEditTextColor(g_SearchEditTipColor,g_SearchEditTextColor);
	  XmpMainWnd.BringWindowToTop();	
	  if(DataCenter.TrayStatus && DataCenter.IsFirstInit)
		{
			XmpMainWnd.Hide();
		}
		
		XmpMainWnd.toolwindow = 0 ;
	  
	  XLUIManager.Trace("JS::OnInit end");
		g_InitTimerId = timermanager.SetInterval(function(){ OnInitTimer(); },100);
}

function OnInitTimer()
{
		timermanager.ClearInterval(g_InitTimerId);
	  
	  if(DataCenter.IsFirstInit)
		{
	  	//PlaylistView.InitView(PlaylistViewContainer.handle);
	  	PlaylistView.SetInterface(XmpPlayer.player,XmpPlayer);
	  }
	  
    XMP.globalEventSource.fireEvent("onInitUI");
		DataCenter.IsFirstInit = false;
	  
	  if(!DataCenter.IsFirstInit)
	  {
	  	var skin = XLUIManager.GetCurrentSkin();
	  	XmpPlayer.SaveSkin(skin);
	  }		
   	
   	XMP.WindowMode.ChangeWindowMode(0); // 普通模式	
   	
   	var lHue = XLUIManager.GetCurrentHue();
		var lSat = XLUIManager.GetCurrentSat();
		var lLight = XLUIManager.GetCurrentLight();
		OnAdjustPalette(lHue, lSat, lLight);
				
		XLUIManager.SetSkinManagerBkgnd("$CF_Left.bmp", "$CF_Top.bmp", "$CF_Right.bmp", "$CF_Bottom.bmp", "$CF_LeftTop.bmp", "$CF_RightTop.bmp", "$CF_LeftBottom.bmp", "$CF_RightBottom.bmp", "$CF_Bk.bmp", "$MinButton.bmp", "$CloseButton.bmp");
}

function OnChangeSkin(bRealChange)
{								
	if(bRealChange)
	{
		XMP.globalEventSource.fireEvent("onSaveUI");
	}
	else
	{
		var skin = XLUIManager.GetCurrentSkin();
	  XmpPlayer.SaveSkin(skin);
	}
}


function OnPreviewSkin()
{
	OnChangeSkin(true);
}

function OnAdjustPalette(lHue, lSat, lLight)
{
	var imgNeedChangeArray = new Array(
	"GeneralButton.bmp",
	"CF_Bk.bmp",
	"CF_LeftTop.bmp",
	"CF_Left.bmp",
	"CF_Right.bmp",
	"CF_LeftBottom.bmp",
	"CF_RightTop.bmp",
	"CF_Top.bmp",
	"CF_Bottom.bmp",
	"CF_RightBottom.bmp",
	"CF_General_Uncheck_Normal.bmp",
	"CF_General_Uncheck_Hover.bmp",
	"CF_General_Down.bmp",
	"CF_General_Check_Normal.bmp",
	"CF_Play_Uncheck_Normal.bmp",
	"CF_Play_Uncheck_Hover.bmp",
	"CF_Play_Down.bmp",
	"CF_Play_Check_Normal.bmp",
	"CF_Associate_Uncheck_Normal.bmp",
	"CF_Associate_Uncheck_Hover.bmp",
	"CF_Associate_Down.bmp",
	"CF_Associate_Check_Normal.bmp",
	"CF_Color_Uncheck_Normal.bmp",
	"CF_Color_Uncheck_Hover.bmp",
	"CF_Color_Down.bmp",
	"CF_Color_Check_Normal.bmp",
	"CF_Speed_Uncheck_Normal.bmp",
	"CF_Speed_Uncheck_Hover.bmp",
	"CF_Speed_Down.bmp",
	"CF_Speed_Check_Normal.bmp",
	"CF_Hotkey_Uncheck_Normal.bmp",
	"CF_Hotkey_Uncheck_Hover.bmp",
	"CF_Hotkey_Down.bmp",
	"CF_Hotkey_Check_Normal.bmp",
	"CF_Subtitle_Uncheck_Normal.bmp",
	"CF_Subtitle_Uncheck_Hover.bmp",
	"CF_Subtitle_Down.bmp",
	"CF_Subtitle_Check_Normal.bmp",
	"MNF_Bk.bmp",
	"MNF_LeftTop.bmp",
	"MNF_LeftRight.bmp",
	"MNF_LeftBottom.bmp",
	"MNF_RightTop.bmp",
	"MNF_TopBottom.bmp",
	"MNF_RightBottom.bmp",
	"MiniBar_Bk.bmp",
	"MiniBar_RightBottom.bmp",
	"MiniBar_Bottom.bmp",
	"MiniBar_LeftBottom.bmp",
	"MiniBar_PrevButton.bmp",
	"MiniBar_PlayButton.bmp",
	"MiniBar_PauseButton.bmp",
	"MiniBar_NextButton.bmp",
	"MiniBar_OpenButton.bmp",
	"MiniBar_SoundButton.bmp",
	"MiniBar_SilenceButton.bmp",
	"MiniBar_SoundBarLeft.bmp",
	"MiniBar_SoundBarInnerLeft.bmp",
	"MiniBar_SoundBarInnerRight.bmp",
	"MiniBar_SoundBarRight.bmp",
	"MiniBar_SoundBar.bmp",
	"MiniBar_SeekBarLeft.bmp",
	"MiniBar_SeekBarRight.bmp",
	"MiniBar_SeekBarBuffered.bmp",
	"MiniBar_SeekBarTransparent.bmp",
	"MiniBar_SeekBar.bmp",
	"TopBar_ScreenButton.bmp",
	"TopBar_NormalModeButton.bmp",
	"TopBar_MiniModeButton.bmp",
	"TopBar_NotTopMostButton.bmp",
	"TopBar_TopMostButton.bmp",
	"TopBar_MinButton.bmp",
	"TopBar_CloseButton.bmp",
	"TopBar_Separator.bmp",
	"TopBar_LeftTop.bmp" ,
	"TopBar_RightTop.bmp" ,
	"TopBar_Top.bmp",
	"TopBar_LeftCenter.bmp",
	"TopBar_RightCenter.bmp" ,
	"TopBar_Center.bmp" ,
	"TopBar_LeftBottom.bmp",
	"TopBar_RightBottom.bmp",
	"TopBar_Bottom.bmp",
	"StopButton.bmp",
	"PrevButton.bmp",
	"PlayButton.bmp",
	"PauseButton.bmp",
	"NextButton.bmp",
	"OpenButton.bmp",
	"SoundButton.bmp",
	"SilenceButton.bmp",
	"ScreenButton.bmp",
	"SoundBarLeft.bmp",
	"SoundBarInnerLeft.bmp",
	"SoundBarInnerRight.bmp",
	"SoundBarRight.bmp",
	"SoundBar.bmp",
	"ProgressBarBGLeft.bmp",
	"ProgressBarFGLeft.bmp",
	"SeekBarInnerRight.bmp",
	"SeekBarRight.bmp",
	"SeekBarBuffered.bmp",
	"SeekBarRightBuffered.bmp",
	"SeekBarLeft.bmp",
	"SeekBarInnerLeft.bmp",
	"SeekBarTransparent.bmp",
	"SeekBar.bmp",
	"MenuButton.bmp",
	"MinButton.bmp",
	"MaxButton.bmp",
	"RestoreButton.bmp",
	"CloseButton.bmp",
	"MenuSeparator.bmp",
	"SearchButton.bmp",
	"ChangeSkin.bmp",
	"ShowPlaylist.bmp",
	"HidePlaylist.bmp",
	"PB_Bottom.bmp",	
	"SizeRightButton.bmp",
	"SizeLeftButton.bmp",
	"MF_LeftTop.bmp", 
	"MF_RightTop.bmp", 
	"MF_Top.bmp", 
	"MF_LeftBottom.bmp", 
	"MF_RightBottom.bmp", 
	"MF_Bottom.bmp", 
	"MF_Left.bmp", 
	"MF_Right.bmp",
	"MF_Bk.bmp",
	"MF_Bk2.bmp",
	"PlayTag_Uncheck_Normal.bmp", 
	"PlayTag_Uncheck_Hover.bmp", 
	"PlayTag_Down.bmp", 
	"PlayTag_Check_Normal.bmp",
	"TheaterTag_Uncheck_Normal.bmp", 
	"TheaterTag_Uncheck_Hover.bmp", 
	"TheaterTag_Down.bmp", 
	"TheaterTag_Check_Normal.bmp", 
	"ClassicalTag_Uncheck_Normal.bmp", 
	"ClassicalTag_Uncheck_Hover.bmp", 
	"ClassicalTag_Down.bmp", 
	"ClassicalTag_Check_Normal.bmp",
	"SearchTag_Uncheck_Normal.bmp", 
	"SearchTag_Uncheck_Hover.bmp", 
	"SearchTag_Down.bmp", 
	"SearchTag_Check_Normal.bmp",
	"MovieHallTag_Uncheck_Normal.bmp",
	"MovieHallTag_Uncheck_Hover.bmp",
	"MovieHallTag_Down.bmp",
	"MovieHallTag_Check_Normal.bmp",
	"TagCloseButton.bmp",
	"SearchEdit.bmp",
	"CF_CloseButton.bmp",
	"SnapshotImg.bmp",
	"menuselbk.bmp",
  "menubk.lefttop.bmp",
  "menubk.leftbottom.bmp",
  "menubk.left.bmp",
  "menubk.righttop.bmp",
  "menubk.rightbottom.bmp",
  "menubk.right.bmp",
  "menubk.top.bmp",
  "menubk.bk.bmp",
  "menubk.bottom.bmp"
	); 
	
	var img = "";
	for(var i = 0; i < imgNeedChangeArray.length; i++)
	{
		img = resourcemanager.GetImage(imgNeedChangeArray[i]);
	  img.Colorize(lHue, lSat, lLight); 		
	}
	
	XmpMainWnd.Refresh();
	XmpConfigWnd.Refresh();
	XmpSkinMgrHost.Refresh();
	
	XLUIManager.SetSkinManagerBkgnd("$CF_Left.bmp", "$CF_Top.bmp", "$CF_Right.bmp", "$CF_Bottom.bmp", "$CF_LeftTop.bmp", "$CF_RightTop.bmp", "$CF_LeftBottom.bmp", "$CF_RightBottom.bmp", "$CF_Bk.bmp", "$MinButton.bmp", "$CloseButton.bmp");
}

function OnQuit()
{
	XLUIManager.Trace("XmpMainWnd::onQuit ");
	XmpMainWnd.Hide();
}

//===============================================================
//== COM事件回调
//===============================================================
function OnPlayStatusChanged(nStatus)
{
	if(nStatus==9)
	{
		return ;
	}
	
	if(nStatus==4) // STOP
	{
		OnPlayProgressChanged(0);
		OnDownloadProgressChanged(0);
		OnBufferProgressChanged(0);
		OnFilmDurationChanged(100);
	}
	DataCenter.PrePlayStatus = DataCenter.PlayStatus ;
	DataCenter.PlayStatus = nStatus ;
	XMP.globalEventSource.fireEvent("OnPlayStatusChanged",nStatus);
}

function OnFilmDurationChanged(duration)
{
	DataCenter.FilmDuration = duration ;
	XMP.globalEventSource.fireEvent("OnFilmDurationChanged",duration);
}

function OnPlayProgressChanged(progress)
{
	DataCenter.PlayProgress = progress;
	XLUIManager.Trace("OnPlayProgressChanged::DataCenter.PlayProgress = "+DataCenter.PlayProgress);
	XMP.globalEventSource.fireEvent("OnPlayProgressChanged",progress);
}

function OnDownloadProgressChanged(progress)
{
	DataCenter.DownloadProgress = progress;
	XMP.globalEventSource.fireEvent("OnDownloadProgressChanged",progress);
}

function OnCtrlButtonEnableChanged(ctrlid, enable)
{
	XMP.globalEventSource.fireEvent("OnCtrlButtonEnableChanged",ctrlid, enable);
}

function OnTabViewAddRemoveChanged(badd, label, mhallid)
{
	XMP.globalEventSource.fireEvent("OnTabViewAddRemoveChanged",badd, label, mhallid);
}
 	
function OnTabViewEnableChanged(enable)
{
	XMP.globalEventSource.fireEvent("OnTabViewEnableChanged",enable);
}

function OnTabViewSelectChanged(labelname)
{
	XLUIManager.Trace("OutputTab::OnTabViewSelectChanged:Start: cur="+DataCenter.CurTabName+",last1="+DataCenter.LastTabName1+",last2="+DataCenter.LastTabName2);
	
	if(DataCenter.CurTabName != labelname)
	{
		if(DataCenter.LastTabName2 == labelname)
		{
			var temp = DataCenter.CurTabName ;
			DataCenter.CurTabName = DataCenter.LastTabName2 ;
			DataCenter.LastTabName2 = DataCenter.LastTabName1 ;
			DataCenter.LastTabName1 = temp ;
		}
		else if(DataCenter.LastTabName1 == labelname)
		{
			var temp = DataCenter.CurTabName ;
			DataCenter.CurTabName = DataCenter.LastTabName1 ;
			DataCenter.LastTabName1 = temp ;
		}
		else
		{
			DataCenter.LastTabName2 = DataCenter.LastTabName1 ;
			DataCenter.LastTabName1 = DataCenter.CurTabName ;
			DataCenter.CurTabName = labelname ;
		}
	}
	XLUIManager.Trace("OutputTab::OnTabViewSelectChanged:end: cur="+DataCenter.CurTabName+",last1="+DataCenter.LastTabName1+",last2="+DataCenter.LastTabName2);
	XMP.globalEventSource.fireEvent("OnTabViewSelectChanged",labelname);
}

function OnBufferProgressChanged(nProgress)
{
	if(nProgress<0 || nProgress>100) return;
	DataCenter.BufferProgress = nProgress;
	XMP.globalEventSource.fireEvent("OnBufferProgressChanged",nProgress);
}

function OnPlayBarStatusChanged(bShow)
{
	XMP.globalEventSource.fireEvent("OnPlayBarStatusChanged",bShow);
}

function OnAutoShutdownStatusChanged(status)
{
	DataCenter.AutoShutdownStatus = status ;
	XMP.globalEventSource.fireEvent("OnAutoShutdownStatusChanged",status);
}

function OnSilentStatusChanged(status)
{
	XLUIManager.Trace("JS::OnSilentStatusChanged() status= " +status);
	DataCenter.IsMute=status;
	XMP.globalEventSource.fireEvent("OnSilentStatusChanged",status);
}

function OnAddRecentFile(strFileName)
{
	XMP.globalEventSource.fireEvent("OnAddRecentFile",strFileName);
}

function OnTopmostStatusChanged(status)
{
	DataCenter.WindowTopMost = status;
	XMP.globalEventSource.fireEvent("OnTopmostStatusChanged",status);
}

function OnAdjustRecentFile(fileIndex)
{
	XMP.globalEventSource.fireEvent("OnAdjustRecentFile",fileIndex);
}

function OnClearRecentFiles()
{
	XMP.globalEventSource.fireEvent("OnClearRecentFiles");
}

function OnRecordStatusChanged(nStatus)
{
	DataCenter.RecordStatus = nStatus;
	XMP.globalEventSource.fireEvent("OnRecordStatusChanged",nStatus);
}

function OnPopupVideoWndMenu(lxPos, lyPo)
{
	XMP.globalEventSource.fireEvent("OnPopupVideoWndMenu",lxPos, lyPo);
}

function OnTitleChanged(newTitle, len)
{
	XLUIManager.Trace("XMP::OnTitleChanged newTitle : " + newTitle);
	DataCenter.TitleName = newTitle;
	DataCenter.TitleLen = len ;
	XMP.globalEventSource.fireEvent("OnTitleChanged",newTitle, len);
}

function OnScreenStatusChanged(nStatus)
{
	if(!(DataCenter.PlayStatus == 3 || DataCenter.PlayStatus == 5 || DataCenter.PlayStatus == 6))
	{
	//	return ;
	}
	
	if(DataCenter.WindowMode==nStatus)
	{
		XMP.globalEventSource.fireEvent("OnScreenStatusChanged",-1/*only update size*/);
	}
	else
	{
		DataCenter.PreWindowMode = DataCenter.WindowMode;
		DataCenter.WindowMode = nStatus ;
		XMP.globalEventSource.fireEvent("OnScreenStatusChanged",nStatus);
	}
}

function OnVolumeChanged(nVolume)
{
	XLUIManager.Trace("JS::OnVolumeChanged() nVolume= " +nVolume);
	if(nVolume==-1) // Down
	{
		XMP.PlayControl.CtrlVolumeDown();
	}
	else if(nVolume==-2) // UP
	{
		XMP.PlayControl.CtrlVolumeUp();
	}
	else if(nVolume==-3) // Silence
	{
		if(DataCenter.IsMute)
		{
			XMP.PlayControl.CtrlSilence();
		}
		else
		{
			XMP.PlayControl.CtrlSound();
		}
	}
	else
	{
		DataCenter.Volume = nVolume;
		XMP.globalEventSource.fireEvent("OnVolumeChanged",nVolume);
	}
}

function OnTopBarStatusChanged(left, top, width, height)
{
	XMP.globalEventSource.fireEvent("OnTopBarStatusChanged",left, top, width, height);
}

function OnMiniCtrlBarStatusChanged(left, top, width, height)
{
	XMP.globalEventSource.fireEvent("OnMiniCtrlBarStatusChanged",left, top, width, height);
}

function OnPlayTitleChanged(newPlayTitle,len)
{
	DataCenter.PlayTitleName = newPlayTitle;
	DataCenter.PlayTitleLen = len ;
	XMP.globalEventSource.fireEvent("OnPlayTitleChanged",newPlayTitle,len);
}
   
function OnPublisherChanged(newPublisher,len)
{
	DataCenter.PublisherName = newPublisher ;
	DataCenter.PublisherLen = len;
	XMP.globalEventSource.fireEvent("OnPublisherChanged",newPublisher,len);
}

function OnBitRateChanged(newBitRate)
{
	DataCenter.BitRate = newBitRate;
	XMP.globalEventSource.fireEvent("OnBitRateChanged",newBitRate);
}

function OnShowPlaylist(bshow)
{
	//if(!DataCenter.IsFirstShowlist)
	{
		XLUIManager.Trace("XMP::OnShowPlaylist : bshow="+bshow+",IsListShow="+DataCenter.IsListShow);
		DataCenter.PreIsListShow = DataCenter.IsListShow ;
		DataCenter.PreIsExpandRightSide = DataCenter.IsExpandRightSide ;
		DataCenter.IsListShow = bshow ;
		DataCenter.IsExpandRightSide = true;
		XMP.globalEventSource.fireEvent("OnShowPlaylist",bshow);
	}
	//DataCenter.IsFirstShowlist=false;
}

function OnMenuHotkeyChanged(menuid, hotkey)
{
	XMP.globalEventSource.fireEvent("OnMenuHotkeyChanged",menuid, hotkey);
}

function OnExpandRightSideChanged(bexpandrightside)
{
	//if(!DataCenter.IsFirstExpandlist)
	{
		DataCenter.PreIsListShow = true ;
		DataCenter.PreIsExpandRightSide = DataCenter.IsExpandRightSide ;
		DataCenter.IsExpandRightSide = bexpandrightside;
		XMP.globalEventSource.fireEvent("OnExpandRightSideChanged",bexpandrightside);
	}
	//DataCenter.IsFirstExpandlist=false;
}

function OnShowMessageBox(title, msgInfo, type,okText,cancelText,width,height)
{
	XMP.globalEventSource.fireEvent("OnShowMessageBox",title, msgInfo, type,okText,cancelText,width,height);
}

function OnShowMediaInfo(name,filetype,fileSize,mediatime,rate,createtime,path)
{
	XMP.globalEventSource.fireEvent("OnShowMediaInfo",name,filetype,fileSize,mediatime,rate,createtime,path);
}

function OnResizePlaySilder(width)
{
	XMP.globalEventSource.fireEvent("OnResizePlaySilder",width);
}

function OnShowAutoShutDownMsgBox()
{
	XMP.globalEventSource.fireEvent("OnShowAutoShutDownMsgBox");
}

function OnBrightSetableChange(bEnable)
{
	XLUIManager.Trace("OnBrightSetableChange:" + bEnable);
	XMP.globalEventSource.fireEvent("OnBrightSetableChange",bEnable);
}

function OnFlashTopBar(left, top, width, height)
{
	XMP.globalEventSource.fireEvent("OnFlashTopBar",left, top, width, height);
}

function OnReceiveCmdLine(param)
{
	XMP.globalEventSource.fireEvent("OnReceiveCmdLine",param);
}

function OnOpenDVD()
{
	XMP.globalEventSource.fireEvent("OnOpenDVD");
}

function OnBosskey()
{
	XMP.globalEventSource.fireEvent("OnBosskey");
}

function OnShowConfigWnd()
{
	XMP.globalEventSource.fireEvent("OnShowConfigWnd");
}

//===============================================================
//==============================================================
//timermanager.ClearInterval(g_InitTimerId);

function OnClickTimer(wparam, lparam)
{
	timermanager.ClearInterval(g_ClickTimerId);
	
	if(g_ClickFlags == 0)
	{
		if(DataCenter.TrayStatus)
	  		menumanager._traymenu._item_open.text = "打开迅雷看看播放器" ;
	  	else
	  		menumanager._traymenu._item_open.text = "隐藏迅雷看看播放器" ;
	  		
	    menumanager._traymenu.SimpleTrackPopupMenu(wparam, lparam);
  }
  g_ClickFlags=2;
}

var g_bDBUp = false;
function OnTrayNotify(object, msg, wparam, lparam)
{
	XLUIManager.Trace("JS::OnTrayNotify::msg = "+msg);
	
  if (msg == 0x0010) // RBUTTONDOWN
  {
  	if(DataCenter.TrayStatus)
  		menumanager._traymenu._item_open.text = "打开迅雷看看播放器" ;
  	else
  		menumanager._traymenu._item_open.text = "隐藏迅雷看看播放器" ;
  		
    menumanager._traymenu.SimpleTrackPopupMenu(wparam, lparam);
  }
  else if(msg == 0x0004) 
  {
  	g_bDBUp=true;
  }
  else if (msg == 0x0002) 
  {
  	if(g_bDBUp==false)  
  	{
  		DataCenter.TrayStatus = false ;
  		
	  		if(XmpMainWnd.windowstate==3)
				{
				 	XmpMainWnd.Restore();
				}
		    XmpPlayer.CmdShowMainUI();		
		    XmpMainWnd.BringWindowToTop();
		    
		    if(DataCenter.TrayConfigWndVisible)
				   XmpConfigWnd.Show(XmpMainWnd,true);
				   
				//XmpMainWnd.Show(false,false);
				XmpMainWnd.Show(DataCenter.WindowTopmostCurrent,false);
			 
		}
		
		g_bDBUp=false;
  }
}

function OnTopbarLButtonDown(obj,wparam,lparam)
{
	XMP.view_TopBar.OnLButtonDown(obj,wparam,lparam);
}

function OnRPopupMenu(obj,wparam,lparam)
{
	XLUIManager.Trace("SubtitleFile::OnRPopupMenu");
	XMP.globalEventSource.fireEvent("onCheckMainMenuPlayState");
	XMP.view_XmpMainWnd.OnRClick(obj,wparam,lparam);
}

function OnBtnPopUpMenu(obj,wparam,lparam)
{
	var item = menumanager._mainmenu;
	if (item == undefined)
	{
	  return false;
	}
	XLUIManager.Trace("SubtitleFile::OnBtnPopUpMenu");
	XMP.globalEventSource.fireEvent("onCheckMainMenuPlayState");
 	return item.TrackPopupMenu( wparam, lparam+1, XmpMainWnd);
}

function OnMainMenuCmd(Object, wparam, lparam)
{
	XMP.menu_XMPMenu.OnMainMenuCmd(Object, wparam, lparam);
}

function OnFaceMgrMenuCmd(Object, wparam, lparam)
{
	XMP.menu_XMPMenu.OnFaceMgrMenuCmd(Object, wparam, lparam);
}

function OnMenuFile(Object, wparam, lparam)
{
	XMP.menu_XMPMenu.OnMenuFile(Object, wparam, lparam);
}

function OnMenuRecentFile(Object, wparam, lparam)
{
	XMP.menu_XMPMenu.OnMenuRecentFile(Object, wparam, lparam);
}

function OnMenuPlayRecord(Object, wparam, lparam)
{
	XMP.menu_XMPMenu.OnMenuPlayRecord(Object, wparam, lparam);
}

function OnMenuQuit(Object, wparam, lparam)
{
	XMP.menu_XMPMenu.OnMenuQuit(Object, wparam, lparam);
}
		
function OnMenuView(Object, wparam, lparam)
{
	XMP.menu_XMPMenu.OnMenuView(Object, wparam, lparam);
}
		
function OnMenuHelp(Object, wparam, lparam)
{
	XMP.menu_XMPMenu.OnMenuHelp(Object, wparam, lparam);
}

function OnMediaMenuCmd(Object, wparam, lparam)
{
	XMP.menu_XMPMenu.OnMediaMenuCmd(Object, wparam, lparam);
}

function OnMostFrontMenuCmd(Object, wparam, lparam)
{
	XMP.menu_XMPMenu.OnMostFrontMenuCmd(Object, wparam, lparam);
}

function OnPlayMenuCmd(Object, wparam, lparam)
{
	XMP.menu_XMPMenu.OnPlayMenuCmd(Object, wparam, lparam);
}

function OnScaleMenuCmd(Object, wparam, lparam)
{
	XMP.menu_XMPMenu.OnScaleMenuCmd(Object, wparam, lparam);
}

function OnTrackMenuCmd(Object, wparam, lparam)
{
	XMP.menu_XMPMenu.OnTrackMenuCmd(Object, wparam, lparam);
}

function OnTrayMenuCmd(Object, wparam, lparam)
{
	XMP.menu_XMPMenu.OnTrayMenuCmd(Object, wparam, lparam);
}

function OnSubtitleCmd(Object, wparam, lparam)
{
	XMP.menu_XMPMenu.OnSubtitleCmd(Object, wparam, lparam);
}

function OnSubtitleFile(Object, wparam, lparam)
{
	XMP.menu_XMPMenu.OnSubtitleFile(Object, wparam, lparam);
}

function OnSubtitleLang(Object, wparam, lparam)
{
	XMP.menu_XMPMenu.OnSubtitleLang(Object, wparam, lparam);
}

//===============================================================
//==============================================================

var XMP = {
	modules:[],
	refName:"XMP",
	genRefName:function(obj){
								if(!this.refNameCounter){
									this.refNameCounter=1;
								}
								if(obj.refName && obj == this[obj.refName])
									return obj.refName;
								do
									this.refNameCounter++;
								while(undefined != this["refName_" + this.refNameCounter]);
								this["refName_" + this.refNameCounter] = obj;
								obj.refName = this.refName + ".refName_" + this.refNameCounter;
								return obj.refName;
						},
	deleteRefName:function(refName){
							if(refName.constructor != String) {
								if(refName.refName == undefined)
									return refName;
								refName = refName.refName;
							}	
							ASSERT(String == refName.constructor, "String == refName.constructor")
							ASSERT(this == eval(this.refName), 'this == eval(this.refName)');					// this == NS
							ASSERT(0 == refName.indexOf(this.refName), "refName.indexOf(this.refName) == 0");
							var obj = this[refName.substr(this.refName.length+1)];
							if(obj == undefined)
								return undefined;
							ASSERT(refName == obj.refName, "refName == obj.refName");
							//this[refName.substr(this.refName.length+1)] = undefined;
							var b = delete this[refName.substr(this.refName.length+1)];		ASSERT(b, 'delete this[refName.substr(this.refName.length+1)]');
							var b = delete obj.refName;										ASSERT(b, 'delete obj.refName');
							return obj;
						},
	DEBUG:function(msg){if(debug) debug.Trace("XMP_js : " + msg.toString())},
	ASSERT:function(b, msg){							
							msg=msg?msg:"undefined";														
							if(!b){
								if(debug)
									debug.ErrorBox( msg.toString()+"\r\ncalling function:\r\n"+XMP.ASSERT.caller.toString());
								else
									debugger
							}	
						}
						
						
};
 
with(XMP)
{		
	Object.prototype.extend = function()		// 使用其它对象扩展当前对象，支持从多个对象扩展
	{
		for(var i=0; i<arguments.length; i++)
			for(var property in arguments[i])
				this[property] = arguments[i][property];
		return this;
	};
	
	Function.prototype.inherit = function()		// 继承其它Function的prototype，支持多继承
	{
		for(var i=0; i<arguments.length; i++)
			this.prototype.extend(arguments[i].prototype);
		return this;
	};
	Function.prototype.delayApply = function(time, thisObj, argArray)	// 延迟调用
	{
		ASSERT(typeof(time) == "number", 'typeof(time) == "number"');
		var f = this;
		return timermanager.SetInterval( function() {
			f.apply(thisObj, argArray);
		}, time);
	};
	
	Function.prototype.delayCall = function(time, thisObj)				// 延迟调用
	{
		return this.delayApply(time, thisObj, argumentsToArray(arguments).slice(2))
	};

	XMP.argumentsToArray = function(args)
	{
		var result = [ ];
		for(var i=0; i<args.length; i++)
			result.push(args[i]);
		return result;
	};
	///////////////////////////////////////////////////////////////////////
	// 事件源
	XMP.EventSource = function()
	{
	};
	//*****  两个等号改成三个等号
	// 绑定事件
	EventSource.prototype.addEventListener = function(oListener, sEvent, fpNotify, tDelay)
	{
		if(!this[sEvent])		// !(sEvent in this)
			this[sEvent] = [ ];
		if(!(this[sEvent] instanceof Array))
			return false;
		for(var i=0; i<this[sEvent].length; i++)
			if(this[sEvent][i].o == oListener && this[sEvent][i].f == fpNotify)
				return true;
		this[sEvent].push( {o: oListener, f: fpNotify, t: tDelay} );
		return true;
	};
	EventSource.prototype.attachEvent = EventSource.prototype.addEventListener;
	
	// 解除事件绑定
	EventSource.prototype.removeEventListener = function(oListener, sEvent, fpNotify)
	{
		if(!this[sEvent] || !(this[sEvent] instanceof Array))
			return false;
		for(var i=0; i<this[sEvent].length; i++)
			if(this[sEvent][i].o == oListener && this[sEvent][i].f == fpNotify) {
				this[sEvent].splice(i, 1);
				if(0 == this[sEvent].length)
					delete this[sEvent];
				return true;
			}
		return false;
	};
	EventSource.prototype.detachEvent = EventSource.prototype.removeEventListener;	
	// 激发事件
	EventSource.prototype.dispatchEvent = function(sEvent)
	{	
		if(!this[sEvent] || !(this[sEvent] instanceof Array))
			return false;
		var args = [this].concat( argumentsToArray(arguments) );
		var listener = this[sEvent].slice(0);
		for(var i=0; i<listener.length; i++)
			if(typeof(listener[i].t) == "number")
				listener[i].f.delayApply( listener[i].t, listener[i].o, args );
			else
				listener[i].f.apply( listener[i].o, args );
		
		return true;
	};
	EventSource.prototype.fireEvent = EventSource.prototype.dispatchEvent;
	
	//太多了,还是搞个编号好些
	OnPlayStatusChanged.extend(EventSource.prototype);
	OnFilmDurationChanged.extend(EventSource.prototype);
	OnPlayProgressChanged.extend(EventSource.prototype);
	OnDownloadProgressChanged.extend(EventSource.prototype);
	OnCtrlButtonEnableChanged.extend(EventSource.prototype);	
	OnTabViewAddRemoveChanged.extend(EventSource.prototype);
	OnTabViewEnableChanged.extend(EventSource.prototype);
	OnTabViewSelectChanged.extend(EventSource.prototype);	
	OnBufferProgressChanged.extend(EventSource.prototype);
	OnPlayBarStatusChanged.extend(EventSource.prototype);
	OnAutoShutdownStatusChanged.extend(EventSource.prototype);
	OnSilentStatusChanged.extend(EventSource.prototype);
	OnAddRecentFile.extend(EventSource.prototype);
	OnTopmostStatusChanged.extend(EventSource.prototype);
	OnAdjustRecentFile.extend(EventSource.prototype);
	OnClearRecentFiles.extend(EventSource.prototype);
	OnRecordStatusChanged.extend(EventSource.prototype);
	OnPopupVideoWndMenu.extend(EventSource.prototype);
	OnTitleChanged.extend(EventSource.prototype);
	OnScreenStatusChanged.extend(EventSource.prototype);
	OnVolumeChanged.extend(EventSource.prototype);
	OnTopBarStatusChanged.extend(EventSource.prototype);
	OnMiniCtrlBarStatusChanged.extend(EventSource.prototype);
	OnPlayTitleChanged.extend(EventSource.prototype);	
	OnPublisherChanged.extend(EventSource.prototype);
	OnBitRateChanged.extend(EventSource.prototype);
	OnShowPlaylist.extend(EventSource.prototype);
	OnMenuHotkeyChanged.extend(EventSource.prototype);
	OnExpandRightSideChanged.extend(EventSource.prototype);
	OnShowMessageBox.extend(EventSource.prototype);
	OnShowMediaInfo.extend(EventSource.prototype);
	OnResizePlaySilder.extend(EventSource.prototype);
	
	//集合所有事件,必要性: 两个功能相同模块是事件源也是监听者, 互相订阅事件, js对象事件+com对象事件现有UI不能统一处理, 
	//
	XMP.globalEventSource=new EventSource();	
	OnPlayStatusChanged.attachEvent(XMP.globalEventSource, "OnPlayStatusChanged", function(){ XMP.globalEventSource.fireEvent.apply(XMP.globalEventSource, ["OnPlayStatusChanged"].concat(argumentsToArray(arguments)))});
	OnFilmDurationChanged.attachEvent(XMP.globalEventSource, "OnFilmDurationChanged", function(){ XMP.globalEventSource.fireEvent.apply(XMP.globalEventSource, ["OnFilmDurationChanged"].concat(argumentsToArray(arguments)))});
	OnPlayProgressChanged.attachEvent(XMP.globalEventSource, "OnPlayProgressChanged", function(){ XMP.globalEventSource.fireEvent.apply(XMP.globalEventSource, ["OnPlayProgressChanged"].concat(argumentsToArray(arguments)))});
	OnDownloadProgressChanged.attachEvent(XMP.globalEventSource, "OnDownloadProgressChanged", function(){ XMP.globalEventSource.fireEvent.apply(XMP.globalEventSource, ["OnDownloadProgressChanged"].concat(argumentsToArray(arguments)))});	
	OnCtrlButtonEnableChanged.attachEvent(XMP.globalEventSource, "OnCtrlButtonEnableChanged", function(){ XMP.globalEventSource.fireEvent.apply(XMP.globalEventSource, ["OnCtrlButtonEnableChanged"].concat(argumentsToArray(arguments)))});	
	OnTabViewAddRemoveChanged.attachEvent(XMP.globalEventSource, "OnTabViewAddRemoveChanged", function(){ XMP.globalEventSource.fireEvent.apply(XMP.globalEventSource, ["OnTabViewAddRemoveChanged"].concat(argumentsToArray(arguments)))});	
	OnTabViewEnableChanged.attachEvent(XMP.globalEventSource, "OnTabViewEnableChanged", function(){ XMP.globalEventSource.fireEvent.apply(XMP.globalEventSource, ["OnTabViewEnableChanged"].concat(argumentsToArray(arguments)))});
	OnTabViewSelectChanged.attachEvent(XMP.globalEventSource, "OnTabViewSelectChanged", function(){ XMP.globalEventSource.fireEvent.apply(XMP.globalEventSource, ["OnTabViewSelectChanged"].concat(argumentsToArray(arguments)))});
	OnBufferProgressChanged.attachEvent(XMP.globalEventSource, "OnBufferProgressChanged", function(){ XMP.globalEventSource.fireEvent.apply(XMP.globalEventSource, ["OnBufferProgressChanged"].concat(argumentsToArray(arguments)))});
	OnPlayBarStatusChanged.attachEvent(XMP.globalEventSource, "OnPlayBarStatusChanged", function(){ XMP.globalEventSource.fireEvent.apply(XMP.globalEventSource, ["OnPlayBarStatusChanged"].concat(argumentsToArray(arguments)))});
	OnAutoShutdownStatusChanged.attachEvent(XMP.globalEventSource, "OnAutoShutdownStatusChanged", function(){ XMP.globalEventSource.fireEvent.apply(XMP.globalEventSource, ["OnAutoShutdownStatusChanged"].concat(argumentsToArray(arguments)))});	
	OnSilentStatusChanged.attachEvent(XMP.globalEventSource, "OnSilentStatusChanged", function(){ XMP.globalEventSource.fireEvent.apply(XMP.globalEventSource, ["OnSilentStatusChanged"].concat(argumentsToArray(arguments)))});	
	OnAddRecentFile.attachEvent(XMP.globalEventSource, "OnAddRecentFile", function(){ XMP.globalEventSource.fireEvent.apply(XMP.globalEventSource, ["OnAddRecentFile"].concat(argumentsToArray(arguments)))});	
	OnTopmostStatusChanged.attachEvent(XMP.globalEventSource, "OnTopmostStatusChanged", function(){ XMP.globalEventSource.fireEvent.apply(XMP.globalEventSource, ["OnTopmostStatusChanged"].concat(argumentsToArray(arguments)))});	
	OnAdjustRecentFile.attachEvent(XMP.globalEventSource, "OnAdjustRecentFile", function(){ XMP.globalEventSource.fireEvent.apply(XMP.globalEventSource, ["OnAdjustRecentFile"].concat(argumentsToArray(arguments)))});	
	OnClearRecentFiles.attachEvent(XMP.globalEventSource, "OnClearRecentFiles", function(){ XMP.globalEventSource.fireEvent.apply(XMP.globalEventSource, ["OnClearRecentFiles"].concat(argumentsToArray(arguments)))});	
	OnRecordStatusChanged.attachEvent(XMP.globalEventSource, "OnRecordStatusChanged", function(){ XMP.globalEventSource.fireEvent.apply(XMP.globalEventSource, ["OnRecordStatusChanged"].concat(argumentsToArray(arguments)))});	
	OnPopupVideoWndMenu.attachEvent(XMP.globalEventSource, "OnPopupVideoWndMenu", function(){ XMP.globalEventSource.fireEvent.apply(XMP.globalEventSource, ["OnPopupVideoWndMenu"].concat(argumentsToArray(arguments)))});	
	OnTitleChanged.attachEvent(XMP.globalEventSource, "OnTitleChanged", function(){ XMP.globalEventSource.fireEvent.apply(XMP.globalEventSource, ["OnTitleChanged"].concat(argumentsToArray(arguments)))});	
	OnScreenStatusChanged.attachEvent(XMP.globalEventSource, "OnScreenStatusChanged", function(){ XMP.globalEventSource.fireEvent.apply(XMP.globalEventSource, ["OnScreenStatusChanged"].concat(argumentsToArray(arguments)))});	
	OnVolumeChanged.attachEvent(XMP.globalEventSource, "OnVolumeChanged", function(){ XMP.globalEventSource.fireEvent.apply(XMP.globalEventSource, ["OnVolumeChanged"].concat(argumentsToArray(arguments)))});	
	OnTopBarStatusChanged.attachEvent(XMP.globalEventSource, "OnTopBarStatusChanged", function(){ XMP.globalEventSource.fireEvent.apply(XMP.globalEventSource, ["OnTopBarStatusChanged"].concat(argumentsToArray(arguments)))});
	OnMiniCtrlBarStatusChanged.attachEvent(XMP.globalEventSource, "OnMiniCtrlBarStatusChanged", function(){ XMP.globalEventSource.fireEvent.apply(XMP.globalEventSource, ["OnMiniCtrlBarStatusChanged"].concat(argumentsToArray(arguments)))});
	OnPlayTitleChanged.attachEvent(XMP.globalEventSource, "OnPlayTitleChanged", function(){ XMP.globalEventSource.fireEvent.apply(XMP.globalEventSource, ["OnPlayTitleChanged"].concat(argumentsToArray(arguments)))});
	OnPublisherChanged.attachEvent(XMP.globalEventSource, "OnPublisherChanged", function(){ XMP.globalEventSource.fireEvent.apply(XMP.globalEventSource, ["OnPublisherChanged"].concat(argumentsToArray(arguments)))});
	OnBitRateChanged.attachEvent(XMP.globalEventSource, "OnBitRateChanged", function(){ XMP.globalEventSource.fireEvent.apply(XMP.globalEventSource, ["OnBitRateChanged"].concat(argumentsToArray(arguments)))});	
	OnShowPlaylist.attachEvent(XMP.globalEventSource, "OnShowPlaylist", function(){ XMP.globalEventSource.fireEvent.apply(XMP.globalEventSource, ["OnShowPlaylist"].concat(argumentsToArray(arguments)))});	
	OnMenuHotkeyChanged.attachEvent(XMP.globalEventSource, "OnMenuHotkeyChanged", function(){ XMP.globalEventSource.fireEvent.apply(XMP.globalEventSource, ["OnMenuHotkeyChanged"].concat(argumentsToArray(arguments)))});
	OnExpandRightSideChanged.attachEvent(XMP.globalEventSource, "OnExpandRightSideChanged", function(){ XMP.globalEventSource.fireEvent.apply(XMP.globalEventSource, ["OnExpandRightSideChanged"].concat(argumentsToArray(arguments)))});
	OnShowMessageBox.attachEvent(XMP.globalEventSource, "OnShowMessageBox", function(){ XMP.globalEventSource.fireEvent.apply(XMP.globalEventSource, ["OnShowMessageBox"].concat(argumentsToArray(arguments)))});
	OnShowMediaInfo.attachEvent(XMP.globalEventSource, "OnShowMediaInfo", function(){ XMP.globalEventSource.fireEvent.apply(XMP.globalEventSource, ["OnShowMediaInfo"].concat(argumentsToArray(arguments)))});
	OnResizePlaySilder.attachEvent(XMP.globalEventSource, "OnResizePlaySilder", function(){ XMP.globalEventSource.fireEvent.apply(XMP.globalEventSource, ["OnResizePlaySilder"].concat(argumentsToArray(arguments)))});
	
	
}
