<?php

// необходимые HTTP-заголовки
header('Access-Control-Allow-origin: *');
header('Content-Type: application/json; charset=UTF-8');

// подключение бд и файл, содержащий объекты
include_once '../config/database.php';
include_once '../objects/product.php';

// получаем соединение с базой данных
$database = new Database();
$db = $database->getConnection();

// инициализируем объект
$product = new Product($db);


// запрашиваем товары
$stmt = $product->read();
$num = $stmt->rowCount();

// Проверка, найдено ли более 0 записей
if ($num > 0) {

    // Массив товаров
    $products_arr = array();
    $products_arr['records']=array();

    // Получаем содержимое нашей таблицы
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

        // извлекаем строку
        extract($row);

        $product_item=array(
            'id' => $id,
            'name' => $name,
            'description' => html_entity_decode($description),
            'characteristics' => html_entity_decode($characteristics),
            'image' => $image,
            'price' => $price,
            'category_id' => $category_id,
            'category_name' => $category_name,
        );

        array_push($products_arr['records'], $product_item);

    }

    // устанавливаем код ответа - 200 ОК
    http_response_code(200);

    // выводим данные о товаре в формате JSON
    echo json_encode($products_arr);
}

else {
    // установим код ответа - 404 Не найдено
    http_response_code(404);

    // сообщаем пользователю, что товары не найдены
    echo json_encode(array('message' => 'Товары не найдены'), JSON_UNESCAPED_UNICODE);
}

?>