import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Brain, Target, Trophy, Users } from 'lucide-react';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="pt-24 pb-12 px-4 md:pt-32 md:pb-20">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Master Your AMCAT Journey
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Prepare smarter, score higher. Join thousands of
                        successful candidates who've aced their AMCAT with our
                        AI-powered platform.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/sign-up">
                            <Button size="lg" className="w-full sm:w-auto">
                                Start Practicing Now
                            </Button>
                        </Link>
                        <Link href="/pricing">
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full sm:w-auto"
                            >
                                View Plans
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-12 px-4 bg-muted/50">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Why Choose Us?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="p-6">
                            <Brain className="h-12 w-12 mb-4 text-primary" />
                            <h3 className="text-xl font-semibold mb-2">
                                AI-Powered Learning
                            </h3>
                            <p className="text-muted-foreground">
                                Personalized practice sessions adapted to your
                                learning pace and style.
                            </p>
                        </Card>
                        <Card className="p-6">
                            <Target className="h-12 w-12 mb-4 text-primary" />
                            <h3 className="text-xl font-semibold mb-2">
                                Targeted Practice
                            </h3>
                            <p className="text-muted-foreground">
                                Focus on your weak areas with our smart analysis
                                and recommendations.
                            </p>
                        </Card>
                        <Card className="p-6">
                            <Trophy className="h-12 w-12 mb-4 text-primary" />
                            <h3 className="text-xl font-semibold mb-2">
                                Proven Results
                            </h3>
                            <p className="text-muted-foreground">
                                Join thousands of successful candidates who
                                achieved their dream scores.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-12 px-4">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Success Stories
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="rounded-full bg-primary/10 p-3">
                                    <Users className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <p className="italic mb-4">
                                        "The practice tests were incredibly
                                        helpful. I improved my score by 30% in
                                        just two weeks!"
                                    </p>
                                    <p className="font-semibold">Sarah P.</p>
                                    <p className="text-sm text-muted-foreground">
                                        Software Engineer
                                    </p>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="rounded-full bg-primary/10 p-3">
                                    <Users className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <p className="italic mb-4">
                                        "The AI-powered recommendations helped
                                        me focus on areas where I needed
                                        improvement the most."
                                    </p>
                                    <p className="font-semibold">Mike R.</p>
                                    <p className="text-sm text-muted-foreground">
                                        Data Analyst
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 px-4 bg-primary text-primary-foreground">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Excel?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Join our platform today and take the first step towards
                        your dream career.
                    </p>
                    <Link href="/sign-up">
                        <Button size="lg" variant="secondary">
                            Get Started Free
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
