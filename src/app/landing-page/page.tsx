"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import React, { useState } from "react";

const Page = () => {
  const colors = ["#2f27ce", "#3fd988", "#7c5bb4"];
  const [color, setColor] = useState(0);
  return (
    <Layout>
      <div className="p-4 px-8 my-4 w-full h-full">
        <span className="font-sans font-bold text-2xl p-2">
          Landing Page Generator
        </span>
        <div className="flex flex-col h-full w-full justify-center items-center bg-bg bg-cover">
          <Card className="w-full max-w-sm flex flex-col justify-stretch">
            <CardHeader>
              <CardTitle className="text-2xl">Login</CardTitle>
              <CardDescription>
                Enter your email below to login to your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
            </CardContent>
            <CardFooter>
              <Button className={`w-full bg-[${colors[color]}] text-white`}>
                Sign in
              </Button>
            </CardFooter>
          </Card>
          <div className="flex flex-row p-4 gap-4">
            <Button
              onClick={() => setColor((d) => d - 1)}
              disabled={color == 0}
            >
              prev
            </Button>
            <Button
              onClick={() => setColor((d) => d + 1)}
              disabled={color == 2}
            >
              next
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
