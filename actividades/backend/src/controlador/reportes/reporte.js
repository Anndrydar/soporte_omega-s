var Sybase = require('sybase'),
    db = new Sybase('host', port, 'dbName', 'username', 'pw');

    db.connect(function (err) {
        if (err) return console.log(err);
      
        db.query('select * from user where user_id = 42', function (err, data) {
          if (err) console.log(err);
      
          console.log(data);
      
          db.disconnect();
      
        });
      });