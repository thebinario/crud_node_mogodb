const PORT = 3000;
const HOST = '0.0.0.0';

//datbase


const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  completed: Boolean,
  created_at: { type: Date, default: Date.now },
});

const Project = mongoose.model('Project', ProjectSchema);

//Admin Bro
const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroMongoose = require('@admin-bro/mongoose');

AdminBro.registerAdapter(AdminBroMongoose)

//config
const adminBroOptions = new AdminBro({
  resources: [
    {
      resource: Project,
      options: {
        properties: {
          description: { type: 'richtext' },
          created_at: {
            isVisible: { edit: false, list: true, show: true, filter: true }
          }
        }
      }
    }
  ],
  locale: {
    translation: {
      labels: {
        Project: 'Meus Projetos',
      }
    }
  },
  rootPath: '/admin',
}
);

const router = AdminBroExpress.buildRouter(adminBroOptions);

// serve
const express = require('express');
const server = express();

server
  .use(adminBroOptions.options.rootPath, router)

server.get('/', (req, res) => {
  res.send('Hello World co');
})

server.listen(PORT, HOST)

/* //Run app
const run = async () => {
  await mongoose.connect("mongodb://localhost/adminbroapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  server.listen(3000, () => { console.log("Server started") });

}

run(); */