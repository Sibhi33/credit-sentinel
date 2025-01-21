import { CreditScore } from "@/components/CreditScore";
import { RiskFactors } from "@/components/RiskFactors";
import { UserProfile } from "@/components/UserProfile";
import { BorrowerMetrics } from "@/components/BorrowerMetrics";
import { LenderMetrics } from "@/components/LenderMetrics";
import { Bitcoin, Globe, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8 relative overflow-hidden">
      {/* Animated Background Lines */}
      <div className="absolute inset-0 z-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[2px] w-[200px] bg-gradient-to-r from-primary/20 to-transparent"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `moveLines ${10 + Math.random() * 10}s linear infinite`,
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl space-y-8 relative z-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">DeFi Risk Assessment</h1>
            <p className="mt-2 text-muted-foreground">Decentralized Credit Risk Analysis Platform</p>
          </div>
          <div className="flex gap-4">
            <Globe className="h-6 w-6 text-primary" />
            <Bitcoin className="h-6 w-6 text-primary" />
            <Shield className="h-6 w-6 text-primary" />
          </div>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="rounded-lg border border-primary/20 bg-black/20 p-6 backdrop-blur">
              <CreditScore />
            </div>
            <div className="rounded-lg border border-primary/20 bg-black/20 p-6 backdrop-blur">
              <RiskFactors />
            </div>
            <div className="rounded-lg border border-primary/20 bg-black/20 p-6 backdrop-blur">
              <BorrowerMetrics />
            </div>
          </div>
          <div className="space-y-8">
            <div className="rounded-lg border border-primary/20 bg-black/20 p-6 backdrop-blur">
              <UserProfile />
            </div>
            <div className="rounded-lg border border-primary/20 bg-black/20 p-6 backdrop-blur">
              <LenderMetrics />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;