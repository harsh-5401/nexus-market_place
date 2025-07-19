import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../reducer";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { toast } from "react-toastify";
import Layout from "../components/Layout";

const UserDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { users } = useSelector((state: RootState) => state.users);
  const [imageError, setImageError] = useState(false);
  
  const user = users.find((u) => u.id === Number(id));

  useEffect(() => {
    if (!user && users.length > 0) {
      toast.error("User not found");
      navigate("/users");
    }
  }, [user, users, navigate]);

  if (!user) {
    return (
      <Layout>
        <div className="container mx-auto py-8 px-4">
          <div className="flex justify-center items-center h-64">
            <div className="text-lg animate-pulse nexus-gradient-text">Loading user details...</div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <div className="mb-8">
          <Button 
            variant="outline" 
            onClick={() => navigate("/users")}
            className="mb-6 nexus-button flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Listings
          </Button>
          <h1 className="text-3xl font-bold nexus-gradient-text">Item Details</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="order-2 md:order-1">
            <Card className="nexus-card overflow-hidden border-neutral-200 dark:border-neutral-800 shadow-md h-full">
              <CardHeader className="bg-neutral-50/50 dark:bg-neutral-900/50 border-b border-neutral-200 dark:border-neutral-800">
                <div className="flex flex-row items-center justify-between">
                  <CardTitle className="text-2xl font-bold">{user.item.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Description</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      {user.item.description}
                    </p>
                  </div>
                  
                  <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <span>Listed by</span>
                      <Badge 
                        variant={user.status === "Active" ? "success" : "destructive"}
                        className={`ml-2 px-3 py-1 rounded-full text-xs font-medium ${
                          user.status === "Active" ? "nexus-badge-active" : "nexus-badge-inactive"
                        }`}
                      >
                        {user.status}
                      </Badge>
                    </h3>
                    
                    <div className="grid gap-4">
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
                      
                      <div>
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
              </CardContent>
            </Card>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="rounded-lg overflow-hidden shadow-md h-full bg-neutral-100 dark:bg-neutral-800">
              <img 
                src={imageError ? 'https://placehold.co/800x600/e2e8f0/64748b?text=Image+Not+Found' : user.item.image} 
                alt={user.item.name}
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDetail; 