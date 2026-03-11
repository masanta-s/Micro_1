import React, { useEffect, useState } from 'react';
import Portlet from './Portlet';
import { contactApi } from '../api/services';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactPortlet = ({ userId }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await contactApi.getContacts(userId);
        setContacts(response.data || []);
      } catch (err) {
        setError('Failed to load contacts');
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchContacts();
    }
  }, [userId]);

  return (
    <Portlet title="Contact Information" className="h-full min-h-[250px] overflow-y-auto">
      {loading ? (
        <div className="flex justify-center items-center h-full text-gray-400">Loading...</div>
      ) : error ? (
        <div className="text-red-500 text-center">{error}</div>
      ) : contacts.length > 0 ? (
        <div className="space-y-4">
          {contacts.map((contact, index) => (
            <div key={index} className="flex flex-col border border-gray-100 bg-gray-50 rounded-md p-3 hover:bg-white transition-colors">
              <h5 className="font-semibold text-gray-700 flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
                {contact.contactName}
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full uppercase tracking-wider font-bold">Primary</span>
              </h5>

              <div className="flex items-center text-sm text-gray-600 my-1">
                 <Mail size={16} className="text-gray-400 mr-2" />
                 <span className="truncate">{contact.email}</span>
              </div>

              <div className="flex items-center text-sm text-gray-600 my-1">
                 <Phone size={16} className="text-gray-400 mr-2" />
                 <span>{contact.phone || 'N/A (Future)'}</span>
              </div>

              <div className="flex items-center text-sm text-gray-600 mt-1 pt-2 border-t border-gray-200">
                 <MapPin size={16} className="text-gray-400 mr-2" />
                 <span>{contact.address || 'Address (Future)'}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-500 text-center flex items-center justify-center h-full italic bg-gray-50 p-6 rounded-md border border-dashed border-gray-200">
          No contact information available.
        </div>
      )}
    </Portlet>
  );
};

export default ContactPortlet;
