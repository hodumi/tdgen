module.exports = function(gen, res) {
    return {
	 
	data: gen.doTimes(9, function(i) {
	    return {
		tableName: 'mt_universe_store_datas',
		id: i,
		setter: gen.doTimes(4, function(j) {
		    return  {bin: [
			{ column: 'und_' + j + '_mon_fr', value: '\'12:00\''},
			{ column: 'und_' + j + '_mon_to', value: '\'12:30\''},
			{ column: 'und_' + j + '_tue_fr', value: '\'12:00\''},
			{ column: 'und_' + j + '_tue_to', value: '\'12:30\''},
			{ column: 'und_' + j + '_wed_fr', value: '\'12:00\''},
			{ column: 'und_' + j + '_wed_to', value: '\'12:30\''},
			{ column: 'und_' + j + '_thu_fr', value: '\'12:00\''},
			{ column: 'und_' + j + '_thu_to', value: '\'12:30\''},
			{ column: 'und_' + j + '_fri_fr', value: '\'12:00\''},
			{ column: 'und_' + j + '_fri_to', value: '\'12:30\''},
			{ column: 'und_' + j + '_sat_fr', value: '\'12:00\''},
			{ column: 'und_' + j + '_sat_to', value: '\'12:30\''},
			{ column: 'und_' + j + '_sun_fr', value: '\'12:00\''},
			{ column: 'und_' + j + '_sun_to', value: '\'12:30\''},
		    ]};
		}),
	    }}),
    };
};

