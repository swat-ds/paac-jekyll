// data tables instance

// const columns = ["ID","LAST NAME","FIRST NAME","RESIDENCE STREET NUMBER","RESIDENCE STREET NAME","MALE OCCUPATION 1","MALE COUNT 1","MALE OCCUPATION 2","MALE COUNT 2","MALE OCCUPATION 3","MALE COUNT 3","MALE OCCUPATION 4","MALE COUNT 4","FEMALE OCCUPATION 1","FEMALE COUNT 1","FEMALE OCCUPATION 2","FEMALE COUNT 2","FEMALE OCCUPATION 3","FEMALE COUNT 3","MALES INTEMPERATE","FEMALES INTEMPERATE","CAN READ","CAN WRITE","BORN SLAVES","BOUGHT FREEDOM","ATTEND RELIGIOUS MEETINGS","NOT ATTEND RELIGIOUS MEETINGS","BELONG TO TEMPERANCE SOCIETIES","REGION"];

// const sofaacNormalized = "https://raw.githubusercontent.com/swat-ds/datasets/master/1847census/sofaac-normalized.csv"

const columns = ["ID","Name","Residence","Number in family","Males","Females","Under 5 years","Under 15 years","Under 50 years","Over 50 years","Natives of state","Not natives of state","Males intemperate","Females intemperate","Number insane","Helpless","Receive public aid","Orphans","Not taken care of by parents","Can read","Can write","At service","Not at service","Occupation of males compensation","Occupation of females compensation","Children under 20 years employed","Number at school","Schools attended","Number occupying a room","Size of room","Whole number in house when rooms are occupied","Value of real estate","Incumberance","Personal property","Rent of house room","Water rent","Tax","Born slaves","Bought freedom","Amount paid for freedom","By whom manumitted","Members of Beneficial Societies","Attend religious meetings","Not attend religious meetings","Belong to temperance societies","Remarks","Source"]

const sofaacTranscribed = "https://raw.githubusercontent.com/swat-ds/datasets/master/1847census/sofaac-transcribed.csv"

function dataTableInit(rows){
    $('#datatable').DataTable({
        dom: 'Bfrtip',
        fixedHeader: true,
        data: rows,
        columns: columns.map(col => ({"title": col})),
        buttons: ['colvis']
    })

    console.log($('#datatable').DataTable().fixedHeader.enabled())
}

$(function() {

    d3.csv(sofaacTranscribed, function(d) {
        return columns.map(col => d[col]);
    })
        .then( rows => dataTableInit(rows) );
});
