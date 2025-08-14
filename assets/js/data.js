const columns = [
    'ID','Name', 'Marital Status', 
    'Residence',
    'Number in family',
    'Males','Females',
    'Under 5 years','Under 15 years','Under 50 years','Over 50 years',
    'Natives of state','Not natives of state',
    'Occupation of males compensation','Occupation of females compensation',
    'Children under 20 years employed','Number at school','Schools attended',
    'Can read','Can write',
    'At service','Not at service',
    'Number occupying a room','Size of room','Whole number in house when rooms are occupied',
    'Value of real estate','Incumberance','Personal property',
    'Rent of house room','Water rent','Tax',
    'Born slaves','Bought freedom','Amount paid for freedom','By whom manumitted',
    'Members of Beneficial Societies','Attend religious meetings','Not attend religious meetings','Belong to temperance societies',
    'Males intemperate','Females intemperate','Number insane',
    'Helpless','Receive public aid','Orphans','Not taken care of by parents',
    'Remarks',
    'Source', 'Page Number',
]

const initialVis = [
    'ID','Name', 'Residence', 'Number in family', 
    'Occupation of males compensation','Occupation of females compensation',
    'Remarks',
    'Source', 'Page Number'
]

const sofaacTranscribed = "https://raw.githubusercontent.com/swat-ds/datasets/main/1847census/sofaac-transcribed.csv"

function dataTableInit(rows){
    $('#datatable').DataTable({
        scrollY: '50vh',
        scrollX: '85vw',
        data: rows,
        columns: columns.map(col => ({
            'title': col, 'name': col,
            'visible': initialVis.includes(col),
            'render': function (data, type, row, meta) {
                if (meta.col === 47) { // Trim volume titles and link to Islandora
                    const vol= 'Volume ' + data.match(/ \d.+?\)/)
                    var url
                    if (vol.includes('1')) {
                        url = 'https://digitalcollections.tricolib.brynmawr.edu/object/sc266996'
                    }
                    if (vol.includes('2')) {
                        url = 'https://digitalcollections.tricolib.brynmawr.edu/object/sc266997'
                    }
                    if (vol.includes('3')) {
                        url = 'https://digitalcollections.tricolib.brynmawr.edu/object/sc267000'
                    }
                    if (vol.includes('4')) {
                        url = 'https://digitalcollections.tricolib.brynmawr.edu/object/sc267001'
                    }
                    return `<a target="_blank" href="${url}">${vol}</a>`
                }
                return data
            }
        })),
        language: {
            search: 'Filter:'
        },
        order: {
            name: 'Name', dir: 'asc'
        },
        fixedHeader: {
            footer: true
        },
        fixedColumns: {
            start: 2
        },
        layout: {
            top2: {
                buttons: [
                    {
                        extend: 'columnToggle',
                        text: 'Marital Status',
                        columns: 'Marital Status:title',
                    },

                    {
                        extend: 'columnToggle',
                        text: 'Residence',
                        columns: 'Residence:title',
                    },

                    {
                        extend: 'columnToggle',
                        text: 'Gender',
                        columns: ['Males:title','Females:title'],
                    },

                    {
                        extend: 'columnToggle',
                        text: 'Age',
                        columns: ['Under 5 years:title','Under 15 years:title','Under 50 years:title','Over 50 years:title'],
                    },

                    {
                        extend: 'columnToggle',
                        text: 'Place of birth',
                        columns: ['Natives of state:title','Not natives of state:title'],
                    },

                    {
                        extend: 'columnToggle',
                        text: 'Adults\' work & compensation',
                        columns: ['Occupation of males compensation:title','Occupation of females compensation:title'],
                    },
                    {
                        extend: 'columnToggle',
                        text: 'Children\'s work & schooling',
                        columns: ['Children under 20 years employed:title','Number at school:title','Schools attended:title'],
                    },

                    {
                        extend: 'columnToggle',
                        text: 'Literacy',
                        columns: ['Can read:title','Can write:title'],
                    },

                    {
                        extend: 'columnToggle',
                        text: 'Number at service',
                        columns: ['At service:title','Not at service:title'],
                    },

                    {
                        extend: 'columnToggle',
                        text: 'Room sizes & crowding',
                        columns: ['Number occupying a room:title','Size of room:title','Whole number in house when rooms are occupied:title'],
                    },

                    {
                        extend: 'columnToggle',
                        text: 'Property ownership',
                        columns: ['Value of real estate:title','Incumberance:title','Personal property:title'],
                    },

                    {
                        extend: 'columnToggle',
                        text: 'Rent & taxes',
                        columns: ['Rent of house room:title','Water rent:title','Tax:title'],
                    },

                    {
                        extend: 'columnToggle',
                        text: 'Slavery & freedom',
                        columns: ['Born slaves:title','Bought freedom:title','Amount paid for freedom:title','By whom manumitted:title'],
                    },

                    {
                        extend: 'columnToggle',
                        text: 'Social & religious organizations',
                        columns: ['Members of Beneficial Societies:title','Attend religious meetings:title','Not attend religious meetings:title','Belong to temperance societies:title'],
                    },

                    {
                        extend: 'columnToggle',
                        text: 'Temperance & Mental Health',
                        columns: ['Males intemperate:title','Females intemperate:title','Number insane:title',],
                    },

                    {
                        extend: 'columnToggle',
                        text: 'Public assistance',
                        columns: ['Helpless:title','Receive public aid:title'],
                    },
                    {
                        extend: 'columnToggle',
                        text: 'Orphans',
                        columns: ['Orphans:title','Not taken care of by parents:title']
                    },
                    {
                        extend: 'columnToggle',
                        text: 'Remarks',
                        columns: 'Remarks:title',
                    }
                ]
            },
            topStart: 'info',
            topEnd: {
                search: {
                    placeholder: 'Name, address, job…'
                }
            },
            bottomStart: {
                pageLength: {
                    menu: [ 10, 25, 50, 100 ]
                }
            }
        },
    })

    // Transform values in "Source" col

    console.log($('#datatable').DataTable())
    console.log($('#datatable').DataTable().fixedHeader.enabled())
}

$(function() {

    d3.csv(sofaacTranscribed, function(d) {
        return columns.map(col => d[col]);
    })
        .then( rows => dataTableInit(rows) );
});

