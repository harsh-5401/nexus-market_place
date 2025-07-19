import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardFooter
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { User } from "../slices/userSlice";
import ItemDetailsModal from "./ItemDetailsModal";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [showModal, setShowModal] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  return (
    <>
      <Card className="w-full nexus-card">
        <CardHeader className="flex flex-row items-center justify-between pb-2 bg-neutral-50/50 dark:bg-neutral-900/50">
          <CardTitle className="text-lg font-semibold">{user.name}</CardTitle>
          <Badge 
            variant={user.status === "Active" ? "success" : "destructive"}
            className={`ml-2 px-3 py-1 rounded-full text-xs font-medium ${
              user.status === "Active" ? "nexus-badge-active" : "nexus-badge-inactive"
            }`}
          >
            {user.status}
          </Badge>
        </CardHeader>
        
        <div className="relative aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-800">
          <img 
            src={imageError ? 'https://placehold.co/400x300/e2e8f0/64748b?text=Image+Not+Found' : user.item.image} 
            alt={user.item.name}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
            onError={() => setImageError(true)}
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
            <h3 className="text-white font-medium truncate">{user.item.name}</h3>
          </div>
        </div>
        
        <CardContent className="pt-4">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-[var(--nexus-blue)]" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="truncate">{user.email}</span>
            </div>
            <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-[var(--nexus-purple)]" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>{user.mobile}</span>
            </div>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2 mt-3">
            {user.item.description}
          </p>
        </CardContent>
        
        <CardFooter className="pt-0">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full nexus-button"
            onClick={() => setShowModal(true)}
          >
            View Details
          </Button>
        </CardFooter>
      </Card>
      
      {showModal && (
        <ItemDetailsModal user={user} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default UserCard; 