import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Speedometer } from "@/components/ui/speedometer";
import { Shield, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const LenderMetrics = () => {
  return (
    <Card className="border-primary/20 bg-card/50 backdrop-blur animate-fade-in">
      <CardHeader className="border-b border-primary/10">
        <CardTitle className="flex items-center gap-2 text-xl font-semibold">
          <Shield className="h-5 w-5 text-primary" />
          Lender Metrics
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-6">
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <Speedometer 
              value={92} 
              label="Trust Score"
              colorClass="text-blue-500"
              size="md"
              showLabels={true}
            />
            <div className="mt-4 space-y-2">
              <p className="text-sm text-muted-foreground">Trust Factors:</p>
              <ul className="text-sm space-y-1">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="flex-1">Verified Identity</span>
                  <span className="text-blue-500 font-medium">✓ KYC</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="flex-1">Successful Loans</span>
                  <span className="text-blue-500 font-medium">50+</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <Speedometer 
              value={15} 
              label="Default Risk"
              colorClass="text-orange-500"
              size="md"
              showLabels={true}
            />
            <div className="mt-4 space-y-2">
              <p className="text-sm text-muted-foreground">Risk Factors:</p>
              <ul className="text-sm space-y-1">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  <span className="flex-1">Portfolio Diversity</span>
                  <span className="text-orange-500 font-medium">High</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  <span className="flex-1">Market Exposure</span>
                  <span className="text-orange-500 font-medium">Low</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};