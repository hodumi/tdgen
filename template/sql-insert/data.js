


module.exports = function(gen, res) {
    return {	 
	data: gen.doTimes(9, function(i) {
	    var tenpo = '\'02\'';
	    var kodo = 0;
	    
	    switch(i) {
		case 0:

	    }

	    return {
		tablename: 'trn_jisseki_uni_datas',
		columns: [
		    'uni_jisseki_tenpocode',
		    'uni_jisseki_haisosbt',
		    'uni_jisseki_binkbn',
		    'uni_jisseki_kodokbn',
		    'uni_jisseki_drivercode',
		    'uni_jisseki_driverpwd',
		    'uni_jisseki_drivername',
		    'uni_jisseki_haisodate',
		    'uni_jisseki_haisotime',
		    'uni_jisseki_torokudate',
		    'uni_jisseki_update',
		],
		values: [
		    tenpo,
		    4,
		    1,
		    kodo,
		    
		    
		],
	    }}),
    };
};


