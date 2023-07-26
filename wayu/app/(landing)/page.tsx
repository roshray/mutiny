import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LandingPage() {
    return (
        <div className="text-6xl text-orange-500">
            <div className="gap-2">
                <Link href="/sign-in">
                    <Button>Login</Button> 
                </Link>
                <Link href="/sign-up">
                    <Button>Register</Button> 
                </Link>               
            </div>
            Landing Page (unprotected)
        </div> 
      
    )
  }