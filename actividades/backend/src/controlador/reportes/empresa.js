var Sybase = require('sybase'),
    db = new Sybase('localhost', 2638, 'Datos3', 'dba', 'ALFA2018');


    const verReport = async(req,res)=>{
      db.connect(function (err) {
        if (err) return console.log(err);
        db.query('select * from sys_periodo', function (err, data) {
          if (err) console.log(err);
          res.status(200).json(data)
        });
      });    
    }


    module.exports = {
      verReport
    }