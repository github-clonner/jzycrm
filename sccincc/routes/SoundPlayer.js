exports.SoundPlayer=function(req,res){
    var recordfiles=require('../modules/ippbx/recordfiles');
	var filename=req.query['filename'] ||req.body['filename']||'我';
    var exten=req.query['exten'] ||	req.body['exten'];
    
    var where={associate:filename,extennum:exten};
    var hostname=req.protocol+'://'+req.host;
    var port=req.app.get('port');
    
    recordfiles.findOne({where:where},function(err,db){
    if(err){
    	
    }
    else{
    	var myfile=filename;
    	if(db!=null)
    		myfile=db.filename;
    	res.render('SoundPlayer/index.html', { hostname:hostname,port:port,myfilename:myfile});		
    }
    });
    

}