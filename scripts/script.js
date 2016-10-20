/**
 * Created by Liss on 20.10.2016.
 */
window.onload=function(){
    var gameSpace=document.getElementById("gameSpace");
    var start=document.getElementById("start");
    var restart=document.getElementById("restart");
    var row = 29;
    var col = 34;
    var i;
    var j;

    //Создание первичной матрицы
    var field = [];
    function firstGeneration() {
        for (i = 0; i < row; i++) {
            field[i] = [];
            for (j = 0; j < col; j++) {
                field[i][j] = Math.floor(Math.random() * (1.7 - (-0.7) + (-0.7)));
            }
        }
    }
    firstGeneration();


    //Создание вторичной матрицы
    var newField = [];
    for (i=0; i<field.length; i++) {
        newField[i] = [];
        for (j = 0; j < field[i].length; j++) {
            newField[i][j] = 0;
        }
    }



    //Создаем матрицу для картинок
    var pictures = new Array(29);
    for (i = 0; i < pictures.length; i++) {
        pictures[i] = new Array(34);
    }





    makeField(field, pictures);

    //добавление матрицы на страницу
    var parts=[];
    for (i = 0; i < row; i++) {
        parts+= pictures[i].join("");
    }
    gameSpace.innerHTML += (parts + "</br>");





    //Проверка на жизнь+создание новой матрицы
    function checkLife() {

       for (row = 0; row < field.length; row++) {
            for (col = 0; col < field[row].length; col++) {
                var counter = 0;

                //Определение каждого возможного случая
                var tmp = 0;

                if ((row == 0) && (col == 0))
                    tmp = 1;

                if ((row == 0) && (col == field[row].length - 1))
                    tmp = 2;

                if ((row == 0) && (col != 0) && (col != field[row].length - 1))
                    tmp = 3;

                if ((col == 0) && (row == field.length - 1))
                    tmp = 4;

                if ((col == 0) && (row != 0) && (row != field.length - 1))
                    tmp = 5;

                if ((row == field.length - 1) && (col == field[row].length - 1))
                    tmp = 6;

                if ((row == field.length - 1) && (col != 0) && (col != field[row].length - 1))
                    tmp = 7;

                if ((col == field.length - 1) && (row != 0 && row != field.length - 1))
                    tmp = 8;

                if ((col != 0) && (col != field[row].length - 1) && (row != 0) && (row != field.length - 1))
                    tmp = 9;


                switch (tmp) {
                    //1 - для верхнего левого угла
                    case 1:

                        if (field[field.length - 1][field[row].length - 1] == 1)
                            counter++;

                        if (field[field.length - 1][col] == 1)
                            counter++;

                        if (field[field.length - 1][col + 1] == 1)
                            counter++;

                        if (field[row][field[row].length - 1] == 1)
                            counter++;

                        if (field[row][col + 1] == 1)
                            counter++;

                        if (field[row + 1][field[row].length - 1] == 1)
                            counter++;

                        if (field[row + 1][col] == 1)
                            counter++;

                        else if (field[row + 1][col + 1] == 1)
                            counter++;
                        break;

                    //2 - для верхнего правого угла
                    case 2:
                        if (field[field.length - 1][field[row].length - 2] == 1)
                            counter++;
                        if (field[field.length - 1][field[row].length - 1] == 1)
                            counter++;
                        if (field[field.length - 1][0] == 1)
                            counter++;
                        if (field[0][field[row].length - 2] == 1)
                            counter++;
                        if (field[0][0] == 1)
                            counter++;
                        if (field[row + 1][col - 1] == 1)
                            counter++;
                        if (field[row + 1][col] == 1)
                            counter++;
                        if (field[row + 1][0] == 1)
                            counter++;
                        break;

                    //3 - для верхнего ребра
                    case 3:
                        if (field[field.length - 1][col - 1] == 1)
                            counter++;
                        if (field[field.length - 1][col] == 1)
                            counter++;
                        if (field[field.length - 1][col + 1] == 1)
                            counter++;
                        if (field[row][col - 1] == 1)
                            counter++;
                        if (field[row][col + 1] == 1)
                            counter++;
                        if (field[row + 1][col - 1] == 1)
                            counter++;
                        if (field[row + 1][col] == 1)
                            counter++;
                        if (field[row + 1][col + 1] == 1)
                            counter++;
                        break;

                    //4 - для левого нижнего угла
                    case 4:
                        if (field[field.length - 2][field[row].length - 1] == 1)
                            counter++;
                        if (field[field.length - 2][col] == 1)
                            counter++;
                        if (field[field.length - 2][col + 1] == 1)
                            counter++;
                        if (field[field.length - 1][field[row].length - 1] == 1)
                            counter++;
                        if (field[row - 1][col + 1] == 1)
                            counter++;
                        if (field[0][field[row].length - 1] == 1)
                            counter++;
                        if (field[0][col] == 1)
                            counter++;
                        if (field[0][col + 1] == 1)
                            counter++;
                        break;

                    //5 - для левого ребра
                    case 5:
                        if (field[row - 1][field[row].length - 1] == 1)
                            counter++;
                        if (field[row - 1][col] == 1)
                            counter++;
                        if (field[row - 1][col + 1] == 1)
                            counter++;
                        if (field[row][field[row].length - 1] == 1)
                            counter++;
                        if (field[row][col + 1] == 1)
                            counter++;
                        if (field[row + 1][field[row].length - 1] == 1)
                            counter++;
                        if (field[row + 1][col] == 1)
                            counter++;
                        if (field[row + 1][col + 1] == 1)
                            counter++;
                        break;

                    //6 - для правого нижнего угла
                    case 6:
                        if (field[field.length - 2][field[row].length - 2] == 1)
                            counter++;
                        if (field[field.length - 2][field[row].length - 1] == 1)
                            counter++;
                        if (field[field.length - 2][0] == 1)
                            counter++;
                        if (field[field.length - 1][field[row].length - 2] == 1)
                            counter++;
                        if (field[field.length - 1][0] == 1)
                            counter++;
                        if (field[0][field[row].length - 2] == 1)
                            counter++;
                        if (field[0][field[row].length - 1] == 1)
                            counter++;
                        if (field[0][0] == 1)
                            counter++;
                        break;

                    //7 - для нижнего ребра
                    case 7:
                        if (field[row - 1][col - 1] == 1)
                            counter++;
                        if (field[row - 1][col] == 1)
                            counter++;
                        if (field[row - 1][col + 1] == 1)
                            counter++;
                        if (field[row][col - 1] == 1)
                            counter++;
                        if (field[row][col + 1] == 1)
                            counter++;
                        if (field[0][col - 1] == 1)
                            counter++;
                        if (field[0][col] == 1)
                            counter++;
                        if (field[0][col + 1] == 1)
                            counter++;

                        break;

                    //8 - для  правого ребра
                    case 8:
                        if (field[row - 1][col - 1] == 1)
                            counter++;
                        if (field[row - 1][col] == 1)
                            counter++;
                        if (field[row - 1][0] == 1)
                            counter++;
                        if (field[row][col - 1] == 1)
                            counter++;
                        if (field[row][0] == 1)
                            counter++;
                        if (field[row + 1][col - 1] == 1)
                            counter++;
                        if (field[row + 1][col] == 1)
                            counter++;
                        if
                        (field[row + 1][0] == 1)
                            counter++;
                        break;

                    //9 - для  всего остального
                    default:
                        if (field[row - 1][col - 1] == 1)
                            counter++;

                        if (field[row - 1][col] == 1)
                            counter++;

                        if (field[row - 1][col + 1] == 1)
                            counter++;

                        if (field[row][col - 1] == 1)
                            counter++;

                        if (field[row][col + 1] == 1)
                            counter++;

                        if (field[row + 1][col - 1] == 1)
                            counter++;

                        if (field[row + 1][col] == 1)
                            counter++;

                        if (field[row + 1][col + 1] == 1)
                            counter++;

                }


                //изменение значения жизни-смерти
                if (field[row][col] == 1) {
                    if ((counter != 2) && (counter != 3)) {
                        newField[row][col]=0;
                    }
                    else{
                        newField[row][col]=1;
                    }

                }
                else {
                    if (counter == 3) {
                        newField[row][col]=1;
                    }
                    else{
                        newField[row][col]=0;
                    }
                }
            }
        }

       field=newField; //присваиваем старому field новую матрицу для дальнейших поколений
        makeField(field, pictures);
        drawAgain(pictures);
    }




   //КНОПКИ КНОПКИ КНОПКИ********************

    //Реализуем работу кнопки Старт - начинает запуск жизни клеток
    var antiSpam=0; //для того, чтобы после нажатия на Старт - эта кнопка перестала работать
    var interval;
    start.onclick = function(){
        if(antiSpam==0){
            interval=setInterval(checkLife, 1000);
        }
        antiSpam=1;
    };

    //Реализуем работу кнопки Рестарт - генерирует новую расстановку клеток и останавливает их изменения
    restart.onclick=function () {
        clearInterval(interval);
        antiSpam=0;
        firstGeneration();
        makeField(field, pictures);
        drawAgain(pictures);
    };

};