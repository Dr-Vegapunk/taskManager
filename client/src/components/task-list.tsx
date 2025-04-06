"use client"

import { useState } from "react"
import { TaskCard } from "@/components/dashboard/task-card"
import type { Task } from "@/lib/types"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface TaskListProps {
  tasks: Task[]
  onUpdateTask: (task: Task) => void
  onDeleteTask: (id: string) => void
}

export function TaskList({ tasks, onUpdateTask, onDeleteTask }: TaskListProps) {
  const [filter, setFilter] = useState<"all" | "todo" | "in-progress" | "completed">("all")

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true
    return task.status === filter
  })

  return (
    <div>
      <Tabs defaultValue="all" onValueChange={(value) => setFilter(value as any)}>
        <TabsList className="mb-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="todo">To Do</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-0">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
                <TaskCard key={task.id} task={task} onUpdate={onUpdateTask} onDelete={onDeleteTask} />
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-muted-foreground">
                No tasks found. Add a new task to get started.
              </div>
            )}
          </div>
        </TabsContent>
        <TabsContent value="todo" className="mt-0">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
                <TaskCard key={task.id} task={task} onUpdate={onUpdateTask} onDelete={onDeleteTask} />
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-muted-foreground">No to-do tasks found.</div>
            )}
          </div>
        </TabsContent>
        <TabsContent value="in-progress" className="mt-0">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
                <TaskCard key={task.id} task={task} onUpdate={onUpdateTask} onDelete={onDeleteTask} />
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-muted-foreground">No in-progress tasks found.</div>
            )}
          </div>
        </TabsContent>
        <TabsContent value="completed" className="mt-0">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
                <TaskCard key={task.id} task={task} onUpdate={onUpdateTask} onDelete={onDeleteTask} />
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-muted-foreground">No completed tasks found.</div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

