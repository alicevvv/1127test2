document.getElementById("chi").onclick = function() {chiFunction()};
function chiFunction() {alert("已經是中文了! 鄉巴佬!");}
document.getElementById("eng").onclick = function() {engFunction()};
function engFunction() {alert("英文嗎?我不想翻");}
document.getElementById("jap").onclick = function() {japFunction()};
function japFunction() {alert("我活在外太空 不想跟你說話");}
function bigpanda(x) {
    x.style.height = "180%";
    x.style.width = "180%";
}
function normalpanda(x) {
    x.style.height = "auto";
    x.style.width = "90%";
}