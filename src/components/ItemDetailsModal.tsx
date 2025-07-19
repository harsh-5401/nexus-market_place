import React, { useEffect, useState } from "react";
import { User } from "../slices/userSlice";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface ItemDetailsModalProps {
  user: User;
  onClose: () => void;
}

const ItemDetailsModal: React.FC<ItemDetailsModalProps> = ({ user, onClose }) => {
  const [imageError, setImageError] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 fade-in">
      <div 
        className="absolute inset-0" 
        onClick={onClose}
        aria-hidden="true"
      ></div>
      
      <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-hidden z-10">
        <div className="flex justify-between items-center border-b border-neutral-200 dark:border-neutral-800 p-4">
          <h2 className="text-xl font-bold nexus-gradient-text">Item Details</h2>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="overflow-y-auto max-h-[calc(90vh-8rem)]">
          <div className="relative aspect-video bg-neutral-100 dark:bg-neutral-800">
            <img 
              src={imageError ? 'https://placehold.co/800x400/e2e8f0/64748b?text=Image+Not+Found' : user.item.image} 
              alt={user.item.name}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
              loading="lazy"
            />
          </div>
          
          <div className="p-6 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">{user.item.name}</h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                {user.item.description}
              </p>
            </div>
            
            <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <span>Listed by</span>
                <Badge 
                  variant={user.status === "Active" ? "success" : "destructive"}
                  className={`ml-2 px-3 py-1 rounded-full text-xs font-medium ${
                    user.status === "Active" ? "nexus-badge-active" : "nexus-badge-inactive"
                  }`}
                >
                  {user.status}
                </Badge>
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">Name</p>
                  <p className="font-medium">{user.name}</p>
                </div>
                
                <div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">Email</p>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-[var(--nexus-blue)]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <p>{user.email}</p>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">Mobile</p>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-[var(--nexus-purple)]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <p>{user.mobile}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-200 dark:border-neutral-800 p-4 flex justify-end">
          <Button onClick={onClose} className="nexus-button">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsModal; 