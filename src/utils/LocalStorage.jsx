const employees = [
  {
    "name" : "John Doe",
    "id": 1,
    "email": "john.doe@example.com",
    "password": "123",
    "taskCounts" : {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Implement Login",
        "description": "Develop login functionality with email & password validation.",
        "date": "2025-08-20",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Fix Navbar Bug",
        "description": "Resolve alignment issue in the navigation bar.",
        "date": "2025-08-18",
        "category": "Bug Fix"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Deploy API",
        "description": "Deploy backend API to staging server.",
        "date": "2025-08-15",
        "category": "Deployment"
      }
    ]
  },
  {
    "name" : "Sarah Smith",
    "id": 2,
    "email": "sarah.smith@example.com",
    "password": "123",
    "taskCounts" : {
      "active": 3,
      "newTask": 0,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Create Landing Page",
        "description": "Design and develop the main landing page layout.",
        "date": "2025-08-21",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Write Test Cases",
        "description": "Write unit tests for authentication module.",
        "date": "2025-08-19",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Setup Analytics",
        "description": "Integrate Google Analytics into the project.",
        "date": "2025-08-16",
        "category": "Integration"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Update Docs",
        "description": "Update project documentation with API details.",
        "date": "2025-08-25",
        "category": "Documentation"
      }
    ]
  },
  {
    "name" : "Michael Jones",
    "id": 3,
    "email": "michael.jones@example.com",
    "password": "123",
    "taskCounts" : {
      "active": 0,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Optimize Queries",
        "description": "Optimize SQL queries for better performance.",
        "date": "2025-08-22",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Code Review",
        "description": "Review Sarah’s code for the new landing page.",
        "date": "2025-08-19",
        "category": "Code Review"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Setup CI/CD",
        "description": "Automate build and deployment pipelines.",
        "date": "2025-08-17",
        "category": "DevOps"
      }
    ]
  },
  {
    "name" : "Emma Watson",
    "id": 4,
    "email": "emma.watson@example.com",
    "password": "123",
    "taskCounts" : {
      "active": 5,
      "newTask": 3,
      "completed": 6,
      "failed": 3
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Research UI Library",
        "description": "Find suitable UI library for project components.",
        "date": "2025-08-23",
        "category": "Research"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Prepare Slides",
        "description": "Prepare project presentation slides for client.",
        "date": "2025-08-18",
        "category": "Presentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Implement Chat",
        "description": "Add chat functionality for support.",
        "date": "2025-08-14",
        "category": "Feature"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "UI Testing",
        "description": "Perform usability testing on the new design.",
        "date": "2025-08-26",
        "category": "Testing"
      }
    ]
  },
  {
    "name" : "Robert Brown",
    "id": 5,
    "email": "robert.brown@example.com",
    "password": "123",
    "taskCounts" : {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "API Integration",
        "description": "Integrate payment gateway API with backend.",
        "date": "2025-08-24",
        "category": "Integration"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Fix Login Bug",
        "description": "Resolve bug where users can’t reset password.",
        "date": "2025-08-18",
        "category": "Bug Fix"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Migrate Database",
        "description": "Move database from staging to production.",
        "date": "2025-08-15",
        "category": "Database"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Performance Audit",
        "description": "Run load tests and prepare report.",
        "date": "2025-08-27",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Update Dependencies",
        "description": "Update all outdated npm packages.",
        "date": "2025-08-19",
        "category": "Maintenance"
      }
    ]
  }
];

const admin = [{
  "name" : "Tushar Gupta",
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}];

export const setLocalStorage  = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin))
}

export const getLocalStorage = () => {
    return {employees, admin}
}
