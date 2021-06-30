const aaaa = require("responses/suffering")
Events.on(ClientLoadEvent, b => {
      Vars.ui.showCustomConfirm(
        "you disgust me",
        "what kind of tomfoolery did you download",
        "idk",
        "i want router language",
        ()=>{
            print("h");
	    Call.infoMessage("no");
        },
        ()=>{
	    aaaa();
        }
    );
});
//code above belongs to RebornTrack970, code below is created by me
Core.bundle.debug("never gonna give you up, never gonna let you down")
