const barChartURL = 'https://www.barchart.com/stocks/indices/russell/russell2000?page=1';
var getBarchartTable = (html, page) => {
  console.log('Page done : ', page);

  let $tbody = $(html).find('.bc-tbl-cell:eq(0)').parent().parent();

  let $title = $tbody.parent().find('thead th span')

  $tbody.find('tr').each( (i, row) => {
    let stockInfo = {};

    let stockname = $(row).find('a:eq(0)').text();

    $(row).find('span[data-ng-bind="cell"]').each((j, col) => {
      let colName = $title.eq(j + 1).text().trim();
      let colValue = $(col).text();
      stockInfo[colName] = colValue;
    });
    stockInfo["Symbol"] = stockname;
    stockInfo["No."] = i + (page-1) * 100;

    allProcessedData.push(stockInfo["Symbol"]);
    
  });

};
getBarchartTable(document.body, 1)
