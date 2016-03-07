{{#data}}
update {{{tableName}}} set {{#setter}}{{#bin}}{{{column}}} = {{{value}}}, {{/bin}}{{/setter}} und_disp_kbn = 1 where id = {{{id}}};
{{/data}}

