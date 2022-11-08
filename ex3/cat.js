// let row1 = `<tr>
// <td>Column1</td>
// <td>Column2</td>
// <td>Column3</td>
// </tr>`;
// let row2 = `<tr>
// <td>Column1</td>
// <td>Column2</td>
// <td>Column3</td>
// </tr>`;
// let table = `<table>${row1}${row2}</table>`;
// let container = document.getElementById(“container”);
// container.innerHTML = table;


let row1 = `<tr>
<th>Review scores</th>
<th>Score</th>
<tr>`;

let row2 = `<tr>
<td>EGM</td>
<td>4/5</td>
<tr>`;

let row3 = `<tr>
<td>Game Informer</td>
<td>8/10</td>
<tr>`;


let row4 = `<tr>
<td>GameSpot</td>
<td>9/10</td>
<tr>`;

let row5 = `<tr>
<td>GamesRadar+</td>
<td>4.5/5</td>
<tr>`;

let row6 = `<tr>
<td>IGN</td>
<td>8/10</td>
<tr>`;

let row7 = `<tr>
<td>Jeuxvideo.com</td>
<td>15/20</td>
<tr>`;

let row8 = `<tr>
<td>PC Gamer(US)</td>
<td>82/100</td>
<tr>`;

let row9 = `<tr>
<td>PCGamesN</td>
<td>9/10</td>
<tr>`;

let row10 = `<tr>
<td>The Guardian</td>
<td>5/5</td>
<tr>`;

let row11 = `<tr>
<td>Video Games Chronicle</td>
<td>5/5</td>
<tr>`;

let colTag = `<col><col><col><col><col><col><col><col><col><col><col>`

let table = `<table>${colTag}${row1}${row2}${row3}${row4}${row5}${row6}${row7}${row8}${row9}${row10}${row11}</table>`;

let tableArea = document.getElementById("table_area");

tableArea.innerHTML = table;


