<?php
// Database connection details
$host = 'localhost';
$dbname = 'student_records';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Fetch student records
    $stmt = $pdo->query("SELECT * FROM students");
    $students = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Selection sort function
    function selectionSort(&$arr, $n) {
        for ($i = 0; $i < $n - 1; $i++) {
            $min_idx = $i;
            for ($j = $i + 1; $j < $n; $j++) {
                if ($arr[$j]['gpa'] < $arr[$min_idx]['gpa']) {
                    $min_idx = $j;
                }
            }
            if ($min_idx != $i) {
                $temp = $arr[$i];
                $arr[$i] = $arr[$min_idx];
                $arr[$min_idx] = $temp;
            }
        }
    }

    // Sort students by GPA
    selectionSort($students, count($students));

    // Display sorted student records
    echo "<table>";
    echo "<tr><th>ID</th><th>Name</th><th>GPA</th></tr>";
    foreach ($students as $student) {
        echo "<tr>";
        echo "<td>" . htmlspecialchars($student['id']) . "</td>";
        echo "<td>" . htmlspecialchars($student['name']) . "</td>";
        echo "<td>" . htmlspecialchars($student['gpa']) . "</td>";
        echo "</tr>";
    }
    echo "</table>";

} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
