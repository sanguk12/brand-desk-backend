var u=Object.defineProperty,m=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var l=(o,t,a)=>t in o?u(o,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[t]=a,i=(o,t)=>{for(var a in t||(t={}))g.call(t,a)&&l(o,a,t[a]);if(r)for(var a of r(t))b.call(t,a)&&l(o,a,t[a]);return o},n=(o,t)=>m(o,p(t));import{_ as s,g as h}from"./index.0a8b89be.js";var f={user:{list:"User List",detail:"User Detail",info:"User Info",info_help:"User Detail Information",name:"Name",id:"ID",username:"Username",nickname:"Nickname",email:"E-Mail",email_verified:"E-Mail Verified",disabled:"Disabled",locked:"Locked",create_date:"Create Date",role:"Role",admin:"Administrator",all_content:"Manage all contents",password:"Password",password_confirm:"Password Confirm",dept:"Department",invalid:"Invalid",valid:"Valid",status:"Status",status_updated:"Role status modified successfully",status_enabled:"Enabled",status_disabled:"Disabled",add:"Add User",edit:"Edit User",delete:"Delete User",delete_confirm:"Are you sure to delete this user?",dept_list:"Department List",disable_user:"Disable User",change_password:"Change Password",detail_log:"Detail",action_log:"Action Log",login_log:"Login Log",detail_tab_title:"Detail of {user}",guide_input_username:"Please enter user name"},dept:{add:"Add Department",edit:"Edit Department",list:"Department List",id:"ID",name:"Dept Name",manager:"Manager Name",ownsAllCategory:"All Category",ownsAllPage:"All Page",ownsAllConfig:"All Config",description:"Description",disabled:"Disabled",enabled:"Enabled",status:"Status",createDate:"Create Date",parent:"Parent Dept",search_user:"Input Search word",deleted:"Department has been deleted",edit_permission:"Edit Permission",edit_category:"Edit Dept Category",own_all_cate:"Own All Category"},role:{add:"Add Role",edit:"Edit Role",list:"Role List",id:"ID",name:"Role Name",code:"Role Code",manager:"Manager Name",ownsAllRight:"All Right",showAllModule:"All Module",description:"Description",disabled:"Disabled",enabled:"Enabled",status:"Status",createDate:"Create Date",parent:"Parent Dept",search_user:"Input Search word",deleted:"Role has been deleted",edit_permission:"Edit Permission",edit_module:"Edit Role Module",own_all_module:"Own All Module",own_all_right:"Own All Right"},cate:{id:"ID",name:"Category Name",createDate:"Create Date",contain_child:"Contain Child",selected:"Selected"},module:{id:"ID",list:"Module Management",koName:"\uD55C\uAD6D\uC5B4",enName:"English",type:"Type",show:"Show",menu:"Menu",icon:"Icon",url:"Url",authorizedUrl:"Allowed Url List",component:"Component",meta:"meta",alias:"Alias",redirect:"Redirect",hidden:"Hidden",sort:"Sort",createDate:"Create Date",add:"Add Module",edit:"Edit Module",go_parent:"Return to Parent"}},_=Object.freeze(Object.defineProperty({__proto__:null,default:f},Symbol.toStringTag,{value:"Module"})),y={okText:"OK",closeText:"Close",cancelText:"Cancel",loadingText:"Loading...",saveText:"Save",delText:"Delete",resetText:"Reset",searchText:"Search",queryText:"Search",inputText:"Please enter",chooseText:"Please choose",redo:"Refresh",back:"Back",light:"Light",dark:"Dark",action:"Actions",verify_failed:"Verification Failed",reload_current:"Reload Current",not_empty:"Can not be empty",exist:"Already exist",reload:"Reload",info:"Info",save:"Save",inputType:{text:"Text",number:"Number",file:"File",image:"Image",video:"Video",password:"Password",editor:"Editor",textarea:"Textarea",date:"Date",datetime:"Datetime",boolean:"Boolean",dictionary:"Dictionary"},contentStatus:{draft:"Draft",normal:"Normal",pend:"Pending",reject:"Reject"},module:{menu:"Menu",action:"Action"}},T=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),S={app:{searchNotData:"No search results yet",toSearch:"to search",toNavigate:"to navigate"},countdown:{normalText:"Get SMS code",sendText:"Reacquire in {0}s"},cropper:{selectImage:"Select Image",uploadSuccess:"Uploaded success!",modalTitle:"Avatar upload",okText:"Confirm and upload",btn_reset:"Reset",btn_rotate_left:"Counterclockwise rotation",btn_rotate_right:"Clockwise rotation",btn_scale_x:"Flip horizontal",btn_scale_y:"Flip vertical",btn_zoom_in:"Zoom in",btn_zoom_out:"Zoom out",preview:"Preivew"},drawer:{loadingText:"Loading...",cancelText:"Close",okText:"Confirm"},excel:{exportModalTitle:"Export data",fileType:"File type",fileName:"File name"},form:{putAway:"Simple",unfold:"Advanced",maxTip:"The number of characters should be less than {0}",apiSelectNotFound:"Wait for data loading to complete..."},icon:{placeholder:"Click the select icon",search:"Search icon",copy:"Copy icon successfully!"},menu:{search:"Menu search"},modal:{cancelText:"Close",okText:"Confirm",close:"Close",maximize:"Maximize",restore:"Restore"},table:{settingDens:"Density",settingDensDefault:"Default",settingDensMiddle:"Middle",settingDensSmall:"Compact",settingColumn:"Column settings",settingColumnShow:"Column display",settingIndexColumnShow:"Index Column",settingSelectColumnShow:"Selection Column",settingFixedLeft:"Fixed Left",settingFixedRight:"Fixed Right",settingFullScreen:"Full Screen",index:"Index",total:"Total {total}"},time:{before:" ago",after:" after",just:"just now",seconds:" seconds",minutes:" minutes",hours:" hours",days:" days"},tree:{selectAll:"Select All",unSelectAll:"Cancel Select",expandAll:"Expand All",unExpandAll:"Collapse all",checkStrictly:"Hierarchical association",checkUnStrictly:"Hierarchical independence"},upload:{save:"Save",upload:"Upload",imgUpload:"ImageUpload",uploaded:"Uploaded",operating:"Operating",del:"Delete",download:"download",saveWarn:"Please wait for the file to upload and save!",saveError:"There is no file successfully uploaded and cannot be saved!",preview:"Preview",choose:"Select the file",accept:"Support {0} format",acceptUpload:"Only upload files in {0} format",maxSize:"A single file does not exceed {0}MB ",maxSizeMultiple:"Only upload files up to {0}MB!",maxNumber:"Only upload up to {0} files",legend:"Legend",fileName:"File name",fileSize:"File size",fileStatue:"File status",startUpload:"Start upload",uploadSuccess:"Upload successfully",uploadError:"Upload failed",uploading:"Uploading",uploadWait:"Please wait for the file upload to finish",reUploadFailed:"Re-upload failed files"},verify:{error:"verification failed\uFF01",time:"The verification is successful and it takes {time} seconds\uFF01",redoTip:"Click the picture to refresh",dragText:"Hold down the slider and drag",successText:"Verified"}},C=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),v={cate:{list:"Category List",id:"ID",name:"Name",code:"Code",type:"Type",sort:"Sort",hidden:"Hidden",model:"Model",show:"Show",allowContribute:"Allow to User write content",search:"Search Word",add:"Add Category",edit:"Edit Category",delete:"Delete Category",delete_confirm:"Are you sure to delete this category?"},cateType:{list:"Category Type List",id:"ID",name:"Name",code:"Code",sort:"Sort",extend:"Extend",field_list:"Extend Field List",field_list_desc:"Field Extension",search:"Search Word",saving:"Saving Category Type...",saved:"Category Type Saved",save_failed:"Failed to save Category Type",field_invalid:"Please input valid value",add:"Add Category Type",save:"Save",cancel:"Cancel",edit:"Edit",delete:"Delete",deleted:"Category Type Deleted!",cancel_confirm:"Are you sure to cancel?",delete_confirm:"Are you sure to delete this category type?",add_field:"Add Field",field:{code:"Code",type:"Type",name:"Name",required:"Required",default_value:"Default Value",max_length:"Max Length",dict:"Dictionary",desc:"Description",searchable:"Searchable",sort:"Sort"}},contentModel:{list:"Content Model List",id:"ID",name:"Name",parent:"Parent",description:"Description",hasChild:"Has Child",hasImages:"Has Images",hasFiles:"Has Files",field_list:"Extend Field List",field_list_desc:"Field Extension",search:"Search Word",saving:"Saving Content Model...",saved:"Content Model Saved",save_failed:"Failed to save Content Model",field_invalid:"Please input valid value",add:"Add Content Model",save:"Save",cancel:"Cancel",edit:"Edit",delete:"Delete",cancel_confirm:"Are you sure to cancel?",delete_confirm:"Are you sure to delete this content model?",add_field:"Add Field",field:{type:"Type",name:"Name",code:"Code",required:"Required",description:"Description",default_value:"Default Value",max_length:"Max Length",dict:"Dictionary",desc:"Description",searchable:"Searchable",useCover:"Use Cover",useTitle:"Use Title",useDescription:"Use Description",cover_label:"Enter cover label",title_label:"Enter title label",description_label:"Enter description label",sort:"Sort"}},content:{list:"Content List",cate_list:"Category List",id:"ID",title:"Title",cate:"Category",model:"Model",status:"Status",cover:"Thumbnail",description:"Description",sort:"Sort",file_path:"File Path",file_name:"File Name",file_type:"Type",file_size:"Size",file_width:"Width",file_height:"Height",publish_date:"Publish Date",expiry_date:"Expire Date",create_date:"Create Date",files:"File List",images:"Image List",search:"Search Word",select_model:"Select Model",add:"Add Content",detail:"View Content",edit:"Edit Content",delete:"Delete Content",delete_confirm:"Are you sure to delete this content?"},file:{list:"File List",add:"Add File",go_parent:"Return to Parent",name:"Name",create_date:"Create Date",update_date:"Update Date",size:"Size",deleted:"File Deleted"},dict:{list:"Dictionary List",id:"ID",name:"Name",code:"Code",parentId:"Parent Dictionary",parentData:"Parent Data",multiple:"Multiple",hasChild:"Has Child",search:"Search Word",createDate:"Create Date",add_row:"Add Row",add:"Add Dictionary",edit:"Edit Dictionary",delete:"Delete Dictionary",delete_confirm:"Are you sure to delete this dictionary?",item_list:"Item List",item_list_desc:"Item List",item:{value:"Value",text:"Text",sort:"Sort"}}},x=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"})),D={footer:{onlinePreview:"Preview",onlineDocument:"Document"},header:{dropdownItemDoc:"Document",dropdownItemLoginOut:"Login Out",tooltipErrorLog:"Error log",tooltipLock:"Lock screen",tooltipNotify:"Notification",tooltipEntryFull:"Full Screen",tooltipExitFull:"Exit Full Screen",lockScreenPassword:"Lock screen password",lockScreen:"Lock screen",lockScreenBtn:"Locking",home:"Home"},multipleTab:{reload:"Refresh current",close:"Close current",closeLeft:"Close Left",closeRight:"Close Right",closeOther:"Close Other",closeAll:"Close All"},setting:{contentModeFull:"Full",contentModeFixed:"Fixed width",topMenuAlignLeft:"Left",topMenuAlignRight:"Center",topMenuAlignCenter:"Right",menuTriggerNone:"Not Show",menuTriggerBottom:"Bottom",menuTriggerTop:"Top",menuTypeSidebar:"Left menu mode",menuTypeMixSidebar:"Left menu mixed mode",menuTypeMix:"Top Menu Mix mode",menuTypeTopMenu:"Top menu mode",on:"On",off:"Off",minute:"Minute",operatingTitle:"Successful!",operatingContent:"The copy is successful, please go to src/settings/projectSetting.ts to modify the configuration!",resetSuccess:"Successfully reset!",copyBtn:"Copy",clearBtn:"Clear cache and to the login page",drawerTitle:"Configuration",darkMode:"Dark mode",navMode:"Navigation mode",interfaceFunction:"Interface function",interfaceDisplay:"Interface display",animation:"Animation",splitMenu:"Split menu",closeMixSidebarOnChange:"Switch page to close menu",sysTheme:"System theme",headerTheme:"Header theme",sidebarTheme:"Menu theme",menuDrag:"Drag Sidebar",menuSearch:"Menu search",menuAccordion:"Sidebar accordion",menuCollapse:"Collapse menu",collapseMenuDisplayName:"Collapse menu display name",topMenuLayout:"Top menu layout",menuCollapseButton:"Menu collapse button",contentMode:"Content area width",expandedMenuWidth:"Expanded menu width",breadcrumb:"Breadcrumbs",breadcrumbIcon:"Breadcrumbs Icon",tabs:"Tabs",tabDetail:"Tab Detail",tabsQuickBtn:"Tabs quick button",tabsRedoBtn:"Tabs redo button",tabsFoldBtn:"Tabs flod button",sidebar:"Sidebar",header:"Header",footer:"Footer",fullContent:"Full content",grayMode:"Gray mode",colorWeak:"Color Weak Mode",progress:"Progress",switchLoading:"Switch Loading",switchAnimation:"Switch animation",animationType:"Animation type",autoScreenLock:"Auto screen lock",notAutoScreenLock:"Not auto lock",fixedHeader:"Fixed header",fixedSideBar:"Fixed Sidebar",mixSidebarTrigger:"Mixed menu Trigger",triggerHover:"Hover",triggerClick:"Click",mixSidebarFixed:"Fixed expanded menu"}},w=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"})),M={action:"Action",ip:"IP",action_date:"Action Date",login_date:"Login Date",content:"Content",channel:"Channel",result:"Result"},k=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"})),F={api:{operationFailed:"Operation failed",errorTip:"Error Tip",errorMessage:"The operation failed, the system is abnormal!",timeoutMessage:"Login timed out, please log in again!",apiTimeoutMessage:"The interface request timed out, please refresh the page and try again!",apiRequestFailed:"The interface request failed, please try again later!",networkException:"network anomaly",networkExceptionMsg:"Please check if your network connection is normal! The network is abnormal",errMsg401:"The user does not have permission (token, user name, password error)!",errMsg403:"The user is authorized, but access is forbidden!",errMsg404:"Network request error, the resource was not found!",errMsg405:"Network request error, request method not allowed!",errMsg408:"Network request timed out!",errMsg500:"Server error, please contact the administrator!",errMsg501:"The network is not implemented!",errMsg502:"Network Error!",errMsg503:"The service is unavailable, the server is temporarily overloaded or maintained!",errMsg504:"Network timeout!",errMsg505:"The http version does not support the request!"},app:{logoutTip:"Reminder",logoutMessage:"Confirm to exit the system?",menuLoading:"Menu loading..."},errorLog:{tableTitle:"Error log list",tableColumnType:"Type",tableColumnDate:"Time",tableColumnFile:"File",tableColumnMsg:"Error message",tableColumnStackMsg:"Stack info",tableActionDesc:"Details",modalTitle:"Error details",fireVueError:"Fire vue error",fireResourceError:"Fire resource error",fireAjaxError:"Fire ajax error",enableMessage:"Only effective when useErrorHandle=true in `/src/settings/projectSetting.ts`."},exception:{backLogin:"Back Login",backHome:"Back Home",subTitle403:"Sorry, you don't have access to this page.",subTitle404:"Sorry, the page you visited does not exist.",subTitle500:"Sorry, the server is reporting an error.",noDataTitle:"No data on the current page.",networkErrorTitle:"Network Error",networkErrorSubTitle:"Sorry\uFF0CYour network connection has been disconnected, please check your network!"},lock:{unlock:"Click to unlock",alert:"Lock screen password error",backToLogin:"Back to login",entry:"Enter the system",placeholder:"Please enter the lock screen password or user password"},login:{backSignIn:"Back sign in",mobileSignInFormTitle:"Mobile sign in",qrSignInFormTitle:"Qr code sign in",signInFormTitle:"Sign in",signUpFormTitle:"Sign up",forgetFormTitle:"Reset password",signInTitle:"SyncCMS Admin Console",signInDesc:"Design Contents!",policy:"I agree to the xxx Privacy Policy",scanSign:"scanning the code to complete the login",loginButton:"Sign in",registerButton:"Sign up",rememberMe:"Remember me",forgetPassword:"Forget Password?",otherSignIn:"Sign in with",loginSuccessTitle:"Login successful",loginSuccessDesc:"Welcome back",accountPlaceholder:"Please input username",passwordPlaceholder:"Please input password",smsPlaceholder:"Please input sms code",mobilePlaceholder:"Please input mobile",policyPlaceholder:"Register after checking",diffPwd:"The two passwords are inconsistent",userName:"Username",password:"Password",confirmPassword:"Confirm Password",email:"Email",smsCode:"SMS code",mobile:"Mobile"}},P=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"})),A={moduleName:"Access Control",user:{list:"User",detail:"User Detail"},dept:{list:"Dept"},role:{list:"Role"},module:{list:"Module"}},L=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"})),E={login:"Login",errorLogList:"Error Log"},R=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),I={moduleName:"Content",cate:{list:"Category",detail:"Category Detail"},cateType:{list:"Category Type",detail:"Category Type Detail"},content:{list:"Content",detail:"Content  Detail"},model:{list:"Content Model",detail:"Content  Model Detail"},file:{list:"File"}},B=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"})),N={dashboard:"Dashboard",about:"About",workbench:"Workbench",analysis:"Analysis"},O=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"})),$={charts:{baiduMap:"Baidu map",aMap:"A map",googleMap:"Google map",charts:"Chart",map:"Map",line:"Line",pie:"Pie"},comp:{comp:"Component",basic:"Basic",transition:"Animation",countTo:"Count To",scroll:"Scroll",scrollBasic:"Basic",scrollAction:"Scroll Function",virtualScroll:"Virtual Scroll",tree:"Tree",treeBasic:"Basic",editTree:"Searchable/toolbar",actionTree:"Function operation",modal:"Modal",drawer:"Drawer",desc:"Desc",lazy:"Lazy",lazyBasic:"Basic",lazyTransition:"Animation",verify:"Verify",verifyDrag:"Drag ",verifyRotate:"Picture Restore",qrcode:"QR code",strength:"Password strength",upload:"Upload",loading:"Loading",time:"Relative Time",cropperImage:"Cropper Image",cardList:"Card List"},editor:{editor:"Editor",jsonEditor:"Json editor",markdown:"Markdown editor",tinymce:"Rich text",tinymceBasic:"Basic",tinymceForm:"embedded form"},excel:{excel:"Excel",customExport:"Select export format",jsonExport:"JSON data export",arrayExport:"Array data export",importExcel:"Import"},feat:{feat:"Page Function",icon:"Icon",tabs:"Tabs",tabDetail:"Tab Detail",sessionTimeout:"Session Timeout",print:"Print",contextMenu:"Context Menu",download:"Download",clickOutSide:"ClickOutSide",imgPreview:"Picture Preview",copy:"Clipboard",msg:"Message prompt",watermark:"Watermark",ripple:"Ripple",fullScreen:"Full Screen",errorLog:"Error Log",tab:"Tab with parameters",tab1:"Tab with parameter 1",tab2:"Tab with parameter 2",menu:"Menu with parameters",menu1:"Menu with parameters 1",menu2:"Menu with parameters 2",ws:"Websocket test",breadcrumb:"Breadcrumbs",breadcrumbFlat:"Flat Mode",breadcrumbFlatDetail:"Flat mode details",breadcrumbChildren:"Level mode",breadcrumbChildrenDetail:"Level mode detail"},flow:{name:"Graphics editor",flowChart:"FlowChart"},form:{form:"Form",basic:"Basic",useForm:"useForm",refForm:"RefForm",advancedForm:"Shrinkable",ruleForm:"Form validation",dynamicForm:"Dynamic",customerForm:"Custom",appendForm:"Append"},iframe:{frame:"External",antv:"antVue doc (embedded)",doc:"Project doc (embedded)",docExternal:"Project doc (external)"},level:{level:"MultiMenu"},page:{page:"Page",form:"Form",formBasic:"Basic Form",formStep:"Step Form",formHigh:"Advanced Form",desc:"Details",descBasic:"Basic Details",descHigh:"Advanced Details",result:"Result",resultSuccess:"Success",resultFail:"Failed",account:"Personal",accountCenter:"Personal Center",accountSetting:"Personal Settings",exception:"Exception",netWorkError:"Network Error",notData:"No data",list:"List page",listCard:"Card list",basic:"Basic list",listBasic:"Basic list",listSearch:"Search list"},permission:{permission:"Permission",front:"front-end",frontPage:"Page",frontBtn:"Button",frontTestA:"Test page A",frontTestB:"Test page B",back:"background",backPage:"Page",backBtn:"Button"},setup:{page:"Intro page"},system:{moduleName:"System management",account:"Account management",account_detail:"Account detail",password:"Change password",dept:"Department management",menu:"Menu management",role:"Role management"},table:{table:"Table",basic:"Basic",treeTable:"Tree",fetchTable:"Remote loading",fixedColumn:"Fixed column",customerCell:"Custom column",formTable:"Open search",useTable:"UseTable",refTable:"RefTable",multipleHeader:"MultiLevel header",mergeHeader:"Merge cells",expandTable:"Expandable table",fixedHeight:"Fixed height",footerTable:"Footer",editCellTable:"Editable cell",editRowTable:"Editable row",authColumn:"Auth column",resizeParentHeightTable:"resizeParentHeightTable"}},j=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"})),U={items_per_page:"/ \uCABD",jump_to:"\uC774\uB3D9\uD558\uAE30",jump_to_confirm:"\uD655\uC778\uD558\uB2E4",page:"",prev_page:"\uC774\uC804 \uD398\uC774\uC9C0",next_page:"\uB2E4\uC74C \uD398\uC774\uC9C0",prev_5:"\uC774\uC804 5 \uD398\uC774\uC9C0",next_5:"\uB2E4\uC74C 5 \uD398\uC774\uC9C0",prev_3:"\uC774\uC804 3 \uD398\uC774\uC9C0",next_3:"\uB2E4\uC74C 3 \uD398\uC774\uC9C0"},z={locale:"ko_KR",today:"\uC624\uB298",now:"\uD604\uC7AC \uC2DC\uAC01",backToToday:"\uC624\uB298\uB85C \uB3CC\uC544\uAC00\uAE30",ok:"\uD655\uC778",clear:"\uC9C0\uC6B0\uAE30",month:"\uC6D4",year:"\uB144",timeSelect:"\uC2DC\uAC04 \uC120\uD0DD",dateSelect:"\uB0A0\uC9DC \uC120\uD0DD",monthSelect:"\uB2EC \uC120\uD0DD",yearSelect:"\uC5F0 \uC120\uD0DD",decadeSelect:"\uC5F0\uB300 \uC120\uD0DD",yearFormat:"YYYY\uB144",dateFormat:"YYYY-MM-DD",dayFormat:"Do",dateTimeFormat:"YYYY-MM-DD HH:mm:ss",monthBeforeYear:!1,previousMonth:"\uC774\uC804 \uB2EC (PageUp)",nextMonth:"\uB2E4\uC74C \uB2EC (PageDown)",previousYear:"\uC774\uC804 \uD574 (Control + left)",nextYear:"\uB2E4\uC74C \uD574 (Control + right)",previousDecade:"\uC774\uC804 \uC5F0\uB300",nextDecade:"\uB2E4\uC74C \uC5F0\uB300",previousCentury:"\uC774\uC804 \uC138\uAE30",nextCentury:"\uB2E4\uC74C \uC138\uAE30"},H=z,q={placeholder:"\uC2DC\uAC04 \uC120\uD0DD",rangePlaceholder:["\uC2DC\uC791 \uC2DC\uAC04","\uC885\uB8CC \uC2DC\uAC04"]},c=q,W={lang:s({placeholder:"\uB0A0\uC9DC \uC120\uD0DD",rangePlaceholder:["\uC2DC\uC791\uC77C","\uC885\uB8CC\uC77C"]},H),timePickerLocale:s({},c)},d=W,e="${label} \uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 ${type}",K={locale:"ko",Pagination:U,DatePicker:d,TimePicker:c,Calendar:d,Table:{filterTitle:"\uD544\uD130 \uBA54\uB274",filterConfirm:"\uD655\uC778",filterReset:"\uCD08\uAE30\uD654",filterEmptyText:"\uD544\uD130 \uC5C6\uC74C",emptyText:"\uB370\uC774\uD130 \uC5C6\uC74C",selectAll:"\uBAA8\uB450 \uC120\uD0DD",selectInvert:"\uC120\uD0DD \uBC18\uC804"},Modal:{okText:"\uD655\uC778",cancelText:"\uCDE8\uC18C",justOkText:"\uD655\uC778"},Popconfirm:{okText:"\uD655\uC778",cancelText:"\uCDE8\uC18C"},Transfer:{searchPlaceholder:"\uC5EC\uAE30\uC5D0 \uAC80\uC0C9\uD558\uC138\uC694",itemUnit:"\uAC1C",itemsUnit:"\uAC1C"},Upload:{uploading:"\uC5C5\uB85C\uB4DC \uC911...",removeFile:"\uD30C\uC77C \uC0AD\uC81C",uploadError:"\uC5C5\uB85C\uB4DC \uC2E4\uD328",previewFile:"\uD30C\uC77C \uBBF8\uB9AC\uBCF4\uAE30",downloadFile:"\uD30C\uC77C \uB2E4\uC6B4\uB85C\uB4DC"},Empty:{description:"\uB370\uC774\uD130 \uC5C6\uC74C"},Form:{defaultValidateMessages:{default:"\uD544\uB4DC \uC720\uD6A8\uC131 \uAC80\uC0AC \uC624\uB958 ${label}",required:"${label} \uC785\uB825\uD574 \uC8FC\uC138\uC694",enum:"${label} [${enum}] \uC911\uC5D0 \uD558\uB098\uC5EC\uC57C \uD569\uB2C8\uB2E4",whitespace:"${label} \uBE44\uC6CC\uB458 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4",date:{format:"${label} \uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uB0A0\uC9DC \uD615\uC2DD\uC785\uB2C8\uB2E4",parse:"${label} \uB0A0\uC9DC \uD615\uC2DD\uC73C\uB85C \uBCC0\uD658\uB420 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4",invalid:"${label} \uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uB0A0\uC9DC\uC785\uB2C8\uB2E4"},types:{string:e,method:e,array:e,object:e,number:e,date:e,boolean:e,integer:e,float:e,regexp:e,email:e,url:e,hex:e},string:{len:"${label} ${len}\uAE00\uC790\uC5EC\uC57C \uD569\uB2C8\uB2E4",min:"${label} \uC801\uC5B4\uB3C4 ${min}\uAE00\uC790 \uC774\uC0C1\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4",max:"${label} ${max}\uAE00\uC790 \uC774\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4",range:"${label} ${min}-${max}\uAE00\uC790 \uC0AC\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4"},number:{len:"${label} \uAC12\uC740 ${len}\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4",min:"${label} \uCD5C\uC19F\uAC12\uC740 ${min}\uC785\uB2C8\uB2E4",max:"${label} \uCD5C\uB313\uAC12\uC740 ${max}\uC785\uB2C8\uB2E4",range:"${label} \uAC12\uC740 ${min}-${max} \uC0AC\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4"},array:{len:"${len}\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4 ${label} ",min:"\uCD5C\uC18C ${min}\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4 ${label}",max:"\uCD5C\uB300 ${max}\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4 ${label}",range:"${label} ${min}-${max} \uC0AC\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4"},pattern:{mismatch:"${label} ${pattern} \uD328\uD134\uACFC \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4"}}}},Y=K;const V={"./ko-KR/AccessControl.ts":_,"./ko-KR/common.ts":T,"./ko-KR/component.ts":C,"./ko-KR/Content.ts":x,"./ko-KR/layout.ts":w,"./ko-KR/Log.ts":k,"./ko-KR/sys.ts":P,"./ko-KR/routes/AccessControl.ts":L,"./ko-KR/routes/basic.ts":R,"./ko-KR/routes/Content.ts":B,"./ko-KR/routes/dashboard.ts":O,"./ko-KR/routes/demo.ts":j};var J={message:n(i({},h(V,"ko-KR")),{antdLocale:Y})};export{J as default};
