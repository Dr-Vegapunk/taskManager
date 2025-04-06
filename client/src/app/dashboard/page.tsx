"use client"

import { useState } from "react"
import { TaskForm } from "@/components/dashboard/task-form"
import { TaskList } from "@/components/dashboard/task-list"
import { Button } from "@/components/ui/button"
import { UserNav } from "@/components/dashboard/user-nav"
import type { Task } from "@/lib/types"
import { Plus } from "lucide-react"

export default function DashboardPage() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Complete project proposal",
      description: "Finish the project proposal for the client meeting",
      status: "in-progress",
      priority: "high",
      dueDate: "2025-04-15",
    },
    {
      id: "2",
      title: "Review code changes",
      description: "Review pull requests from the team",
      status: "todo",
      priority: "medium",
      dueDate: "2025-04-10",
    },
    {
      id: "3",
      title: "Update documentation",
      description: "Update the API documentation with new endpoints",
      status: "completed",
      priority: "low",
      dueDate: "2025-04-05",
    },
  ])

  const [isAddingTask, setIsAddingTask] = useState(false)

  const addTask = (task: Omit<Task, "id">) => {
    const newTask = {
      ...task,
      id: Math.random().toString(36).substring(7),
    }
    setTasks([...tasks, newTask])
    setIsAddingTask(false)
  }

  const updateTask = (updatedTask: Task) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)))
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="text-xl font-bold">TaskMaster</div>
          <UserNav />
        </div>
      </header>
      <main className="flex-1 container py-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Your Tasks</h1>
          <Button onClick={() => setIsAddingTask(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add Task
          </Button>
        </div>

        {isAddingTask ? (
          <div className="mb-6">
            <TaskForm onSubmit={addTask} onCancel={() => setIsAddingTask(false)} />
          </div>
        ) : null}

        <TaskList tasks={tasks} onUpdateTask={updateTask} onDeleteTask={deleteTask} />
      </main>
      <footer className="border-t py-4">
        <div className="container text-center text-sm text-muted-foreground">
          © 2025 TaskMaster. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

