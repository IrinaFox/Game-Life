/**
 * Created by Liss on 20.10.2016.
 */
//Инициализируем матрицу с картинками

function makeField(place, placePic) {
    var row;
    var col;

    for (row = 0; row < place.length; row++) {

        for (col = 0; col < place[row].length; col++) {

            if (place[row][col] == 1)
                placePic[row][col] = "<img src='img/white.PNG' width='15' height='15'/>";
            else
                placePic[row][col] = "<img src='img/dark.PNG' width='15' height='15'/>";
        }
    }
}