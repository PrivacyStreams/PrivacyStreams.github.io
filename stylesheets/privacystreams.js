/**
 * Created by yuanchun on 13/03/17.
 */
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("toTopBtn").style.display = "block";
    } else {
        document.getElementById("toTopBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

function tableSearch() {
  // Declare variables
  var type_input, content_input, type_filter, content_filter, table, tr, td, i;

  type_input = document.getElementById("typeSearch");
  type_filter = type_input.value.toUpperCase();
  content_input = document.getElementById("contentSearch");
  content_filter = content_input.value.toUpperCase();

  table = document.getElementsByTagName("table")[0];
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 2; i < tr.length; i++) {
    type_td = tr[i].getElementsByTagName("td")[0];
    content_td = tr[i].getElementsByTagName("td")[1];

    if (type_td) {
      if (type_td.innerHTML.toUpperCase().indexOf(type_filter) > -1 && content_td.innerHTML.toUpperCase().indexOf(content_filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

