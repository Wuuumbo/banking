import React from 'react';
import { Building2, LayoutDashboard, Search, Settings } from 'lucide-react';
import { NavLink } from './NavLink';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white h-screen fixed left-0 top-0 border-r border-gray-200">
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-800">Banking Advisor</h1>
      </div>
      
      <nav className="px-4 space-y-1">
        <NavLink to="/" icon={<LayoutDashboard className="w-5 h-5" />}>
          Dashboard
        </NavLink>
        <NavLink to="/companies" icon={<Building2 className="w-5 h-5" />}>
          Companies
        </NavLink>
        <NavLink to="/search" icon={<Search className="w-5 h-5" />}>
          Search
        </NavLink>
        <NavLink to="/settings" icon={<Settings className="w-5 h-5" />}>
          Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;