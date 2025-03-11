from turtle import *

#we want to paint a house

#step 1: draw a squar
begin_fill()

color("purple")
width(7)
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
end_fill()
#end of square

#drawing a door
begin_fill()
forward(70)
color("yellow")
left(90)

forward(100)
right(90)

forward(50)
right(90)
forward(100)
end_fill()
penup()
goto(200, 200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)

left(120)
forward(200)
end_fill()




exitonclick()