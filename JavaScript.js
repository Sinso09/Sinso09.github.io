const Menu = document.getElementById("container")
let menu_closed_open =true
function Open_Close()
{
  if (menu_closed_open)
  {
    menu_closed_open=false
    Menu.style.visibility="hidden"
  }
  else
  {
    menu_closed_open=true
    Menu.style.visibility="visible"
  }
}
