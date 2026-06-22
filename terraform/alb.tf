resource "aws_lb" "todo_alb" {
  name               = "todo-alb"
  internal           = false
  load_balancer_type = "application"

  security_groups = [
    aws_security_group.ecs_sg.id
  ]

  subnets = [
    "subnet-xxxx",
    "subnet-yyyy"
  ]
}
