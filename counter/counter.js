let add = document.getElementById("increment");
let sub = document.getElementById("decrement");
let no = document.getElementById("num");
let count = 0;
add.onclick = function() {
  count += 1;
  no.innerHTML = count;
};

sub.onclick = function() {
  count -= 1;
  no.innerHTML = count;
};

no.onclick = function() {
  count = 0;
  no.innerHTML = count;
}


