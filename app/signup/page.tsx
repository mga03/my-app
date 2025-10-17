import { SignupForm } from "@/components/signup-form"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignupForm />

    <Button className="w-full px-[0px]" variant={"destructive"}>
          <a href="/dashboard" className="w-full h-full">pass</a>
        </Button>

      </div>
    </div>
  )
}
