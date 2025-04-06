import { RegisterForm } from "@/components/auth/register-form"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="text-xl font-bold">TaskMaster</div>
          <nav>
            <Button asChild variant="ghost">
              <Link href="/">Login</Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1 container py-10 flex items-center justify-center">
        <div className="w-full max-w-md">
          <RegisterForm />
        </div>
      </main>
      <footer className="border-t py-4">
        <div className="container text-center text-sm text-muted-foreground">
          © 2025 TaskMaster. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

