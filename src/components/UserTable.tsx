import React, { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "./ui/table";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { User } from "../slices/userSlice";
import ItemDetailsModal from "./ItemDetailsModal";

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  
  const handleViewDetails = (user: User) => {
    setSelectedUser(user);
  };
  
  const handleCloseModal = () => {
    setSelectedUser(null);
  };
  
  return (
    <>
      <div className="w-full overflow-auto rounded-lg border border-neutral-200 dark:border-neutral-800 shadow-sm">
        <Table>
          <TableHeader className="bg-neutral-50 dark:bg-neutral-900">
            <TableRow>
              <TableHead className="font-semibold">Person Name</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold">Item Image</TableHead>
              <TableHead className="font-semibold">Item Name</TableHead>
              <TableHead className="font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.length > 0 ? (
              users.map((user) => (
                <TableRow 
                  key={user.id}
                  className="hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                >
                  <TableCell className="font-medium py-4 align-middle">
                    <div className="flex flex-col">
                      <span>{user.name}</span>
                      <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{user.email}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-4 align-middle">
                    <Badge 
                      variant={user.status === "Active" ? "success" : "destructive"}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        user.status === "Active" ? "nexus-badge-active" : "nexus-badge-inactive"
                      }`}
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-4 align-middle">
                    <div className="w-24 h-24 rounded-md overflow-hidden flex items-center justify-center border border-neutral-200 dark:border-neutral-700">
                      <img 
                        src={user.item.image} 
                        alt={user.item.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = 'https://placehold.co/400x400/e2e8f0/64748b?text=Image+Not+Found';
                        }}
                      />
                    </div>
                  </TableCell>
                  <TableCell className="py-4 align-middle">
                    <div className="flex flex-col">
                      <span className="font-medium">{user.item.name}</span>
                      <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 line-clamp-2">{user.item.description.substring(0, 60)}...</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-4 align-middle">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleViewDetails(user)}
                      className="hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors"
                    >
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  No users found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      {selectedUser && (
        <ItemDetailsModal user={selectedUser} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default UserTable; 