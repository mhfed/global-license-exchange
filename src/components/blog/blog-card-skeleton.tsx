import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function BlogCardSkeleton() {
  return (
    <Card className="h-full overflow-hidden border-0 bg-white">
      <div className="relative w-full h-48 bg-gray-200 animate-pulse" />
      
      <CardHeader className="pb-2">
        <div className="h-6 bg-gray-200 rounded animate-pulse mb-2" />
        <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4" />
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3" />
        </div>
        
        <div className="flex items-center">
          <div className="w-4 h-4 bg-gray-200 rounded animate-pulse mr-2" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-24" />
        </div>
      </CardContent>
    </Card>
  );
} 