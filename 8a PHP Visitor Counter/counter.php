<?php
$counterFile = 'visitor_count.txt';

// Read the current count
if (file_exists($counterFile)) {
    $count = (int)file_get_contents($counterFile);
} else {
    $count = 0;
}

// Increment the count
$count++;

// Save the new count
file_put_contents($counterFile, $count);

// Display the count
echo "<h2>Visitor Count</h2>";
echo "<p>You are visitor number: $count</p>";
?>
