/* Visualizations for 1847 Census Occupation Data
Alice Huang, 7/17/19 */

// Refactored @bulbil 2020-11-23

$(function(){

  // bar chart for cumulative occ data, only showing shared occs btwn male/female (viz 1)

const chart = c3.generate({
    bindto: '#chart',
    data: {
      url: '../assets/data/top_common_jobs.csv',
      x: 'OCC',
      type: 'bar',
      groups: [
        ['MALE', 'FEMALE']
      ],
      colors: {
          'MALE': '#8856a7',
          'FEMALE': '#9ebcda'
      } // colors from color brewer
    },
    axis: {
      x: {
        type: 'category',
        tick: {
          rotate: 45,
          multiline: false
        },
        height: 110,
        label: {
          text: 'Occupation',
          position: 'outer-center'
        }
      },
      y: {
        label: {
          text: 'Frequency',
          position: 'outer-middle'
        },
        max: 2000
      }
    },
    legend: {
      position: 'inset'
    }
});

/*************************************************************/

// bar chart 2, categorized occupations


const cats = { "ag": "Agricultural Pursuits",
"dp": "Domestic & Personal Service",
"la": "Laborer",
"ma": "Manufacturing & Mechanical Pursuits",
"ps": "Professional Service",
"tr": "Trade & Transportation",
"mto": "More than One",
"niw": "Not in Work"}

let chart3,
    currCategory = 'ag';

// helpers

// return data file path for current category
function getDataPath(category) {
  return "../assets/data/m_" + String(category) + ".csv"
}

// draw chart based on current category
function drawCategoryChart(category) {

  chart3 = c3.generate({
      bindto: '#chart3',
      data: {
        url: getDataPath(category),
        x: cats[category],
        type: 'bar',
        colors: {
          'MALE': '#8856a7',
          'FEMALE': '#9ebcda'
        }
      },
      transition: {
        duration: 2000
      },
      axis: {
        x: {
          type: 'category',
          tick: {
            rotate: 45,
            multiline: false
          },
          height: 180,
          label: {
            text: 'Occupation',
            position: 'outer-center'
          }
        },
        y: {
          label: {
            text: 'Frequency',
            position: 'outer-middle'
          },
          // max: 2000
        }
      },
      legend: {
        position: 'inset'
      },
      point: {
        r: 4
      }
  });

}

// add event listener for dropdown category menu
d3.select('.input-group select').on('change', function() {

  item = d3.select(this).property('value'); // get drop-down selection
  drawCategoryChart(item)
  currCategory = item;
  d3.select('#title').text(cats[item])

})

// initialize chart
drawCategoryChart(currCategory)

// initialize chart title
d3.select('#title').append('text')
   .attr('class','label')
   .attr('text-anchor','end')
   .attr('font-size','14px')
   .text('Agricultural Pursuits Occupations')

})
