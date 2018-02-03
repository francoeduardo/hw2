function drawLines(x) {
  while (x>0) {
    line(random(width), random(height), random(width), random(height));
    x=x-1}
}

drawLines(10);
