import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Brain, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { cn } from '@/lib/utils';

const routes = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'Dashboard',
        href: '/dashboard',
    },
    {
        label: 'Tests',
        href: '/tests',
    },
    {
        label: 'Pricing',
        href: '/pricing',
    },
];

export function Navbar() {
    return (
        <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary/95 backdrop-blur supports-[backdrop-filter]:bg-secondary/60">
            <div className="flex gap-2 items-center">
                <Sheet>
                    <SheetTrigger className="md:hidden">
                        <Menu className="h-6 w-6" />
                    </SheetTrigger>
                    <SheetContent
                        side="left"
                        className="w-[300px] sm:w-[400px]"
                    >
                        <nav className="flex flex-col gap-4">
                            {routes.map((route) => (
                                <Link
                                    key={route.href}
                                    href={route.href}
                                    className={cn('block px-2 py-1 text-lg')}
                                >
                                    {route.label}
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
                <Link href="/" className="flex items-center gap-2">
                    <Brain className="h-8 w-8 text-primary" />
                    <span className="font-bold text-xl">AMCAT Prep</span>
                </Link>
            </div>
            <div className="hidden md:flex items-center gap-6">
                <nav className="flex items-center gap-6">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                'text-sm font-medium transition-colors hover:text-gray-600'
                            )}
                        >
                            {route.label}
                        </Link>
                    ))}
                </nav>
            </div>
            <div className="flex items-center gap-4">
                <ModeToggle />

                <SignedOut>
                    <Link href="/sign-in">
                        <Button variant="outline" size="sm">
                            Sign In
                        </Button>
                    </Link>

                    <Link href="sign-up">
                        <Button>Get Started</Button>
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    );
}
