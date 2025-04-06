"use client"

import { useState } from "react"
import type { Task } from "@/lib/types"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Edit, Trash } from "lucide-react"
import { TaskForm } from "./task-form"

interface TaskCardProps {
  task: Task
  onUpdate: (task: Task) => void
  onDelete: (id: string) => void
}

export function TaskCard({ task, onUpdate, onDelete }: TaskCardProps) {
  const [isEditing, setIsEditing] = useState(false)

  const statusColors = {
    todo: "bg-slate-500",
    "in-progress": "bg-amber-500",
    completed: "bg-green-500",
  }

  const priorityColors = {
    low: "bg-blue-500",
    medium: "bg-amber-500",
    high: "bg-red-500",
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  if (isEditing) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Edit Task</CardTitle>
        </CardHeader>
        <CardContent>
          <TaskForm
            task={task}
            onSubmit={(updatedTask) => {
              onUpdate({ ...updatedTask, id: task.id })
              setIsEditing(false)
            }}
            onCancel={() => setIsEditing(false)}
          />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{task.title}</CardTitle>
          <div className="flex space-x-1">
            <Button variant="ghost" size="icon" onClick={() => setIsEditing(true)} className="h-8 w-8">
              <Edit className="h-4 w-4" />
              <span className="sr-only">Edit</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => onDelete(task.id)} className="h-8 w-8 text-destructive">
              <Trash className="h-4 w-4" />
              <span className="sr-only">Delete</span>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm text-muted-foreground mb-4">{task.description}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          <Badge variant="secondary" className={statusColors[task.status as keyof typeof statusColors]}>
            {task.status.charAt(0).toUpperCase() + task.status.slice(1).replace("-", " ")}
          </Badge>
          <Badge variant="secondary" className={priorityColors[task.priority as keyof typeof priorityColors]}>
            {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
          </Badge>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="mr-1 h-4 w-4" />
          <span>Due: {formatDate(task.dueDate)}</span>
        </div>
      </CardFooter>
    </Card>
  )
}

