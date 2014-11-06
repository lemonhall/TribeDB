/**
 * TribeDB 使用测试
 */


var tribe = require('../index.js');



//载入配置文件
var conf = tribe.configure('./test.conf',{sync: true});

console.log(conf);

return 





	// console.log(err);
	// console.log(conf);

	// console.time('table1');
	// tribe.query('show tables;','test',function(err, data){
	// 	console.timeEnd('table1');
	// });

	var db = tribe.createQuery('part');






	db.data('title','修改标题').data('create_time',1234567).where_in('id',[2,5,12])
	db.join('jointb');
	db.delete(function(err, data){

		log(err);
		log(data);

	},{
		// db: 1,
		// sql: 1,
		// obj: 1,
	});


	return



	//热身
	db.where('id',100).select(function(err, data){
	// 	// log(err);
	// 	// log(data);
	// db.table('jointb').where('id',100).select(function(err, data){
	// 	// log('热身');
	// db.table('part');



	console.time('查询');
	db.columns('*').where_in('id',[1,2,3,5,19]);
	// db.data('title','修改标题').data('time',1234567).where_in('id',[4,12]).limit(2)
	// db.update(function(err, data){
	db.join('jointb','create_time');
	// log(db);
	db.select(function(err, data){

		// console.log(err);

		console.timeEnd('查询');

		console.log(data);

	},{
		// db: 1,
		// sql: 1,
		// obj: 1,
	});




	// });
	});


	return;


	db.where_in('id',[1,4]).limit(3).delete(function(err, data){

		console.log(err);

		console.log(data);

	},{
		// sql: 1,
		// obj: 1,
	});

	return;

	//联合插入测试


	db.data({title:'根表标题'}).join_insert('jointb',{jointitle:"拆分表标题"}).insert(function(err, data){
		console.log(err);
		console.log(data);
	});


	return;

	tribe.get_table_partition('part',function(err, data){
		//console.log(data);
	});




	return;

	var db = tribe.createQuery('part');

	db.data({title:'yangjie2'}).insert(function(err, data){

		console.log(err);
		console.log(data);

	},{
		//getsql: 1
	});


	// var db = tribe.createQuery('part');
	// db.select(function(err, sqls){

	// 	console.log(err);
	// 	console.log(sqls[1]);
	// },{
	// 	getsql: 1
	// });



	// console.log(db);
	// console.log(sqls);
