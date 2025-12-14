# Intelligent-Document-Insight-Platform
Enterprise RAG Knowledge Base

![Status](https://img.shields.io/badge/Status-Active-success)
![Python](https://img.shields.io/badge/Backend-Python%20%7C%20FastAPI-blue)
![Angular](https://img.shields.io/badge/Frontend-Angular%2017-red)
![AI](https://img.shields.io/badge/AI-LangChain%20%7C%20ChromaDB-orange)
![Docker](https://img.shields.io/badge/Deployment-Docker-blue)

## 📋 Overview

**DocuInsight** is an end-to-end **Retrieval-Augmented Generation (RAG)** platform designed to make unstructured enterprise data (PDFs, Documentation, Reports) interactively searchable.

Unlike standard keyword search, this solution uses vector embeddings to understand the *semantic context* of a user's query, allowing employees to "chat" with their internal documents and retrieve precise answers with source citations.

This project bridges the gap between **Modern Web Development** and **AI Engineering**, demonstrating a production-ready architecture.

---

## 🚀 Key Features

* **📄 Document Ingestion:** Drag-and-drop interface for uploading PDF and Text documents.
* **vectorization Pipeline:** Automated chunking and embedding of text using **LangChain** and storage in **ChromaDB**.
* **🤖 Context-Aware Chat:** Interactive chat interface built with **Angular**, utilizing LLMs (OpenAI GPT-4 or Llama 3) to generate answers based *only* on the provided context.
* **🔍 Source Transparency:** Every answer cites the specific document and page number used to generate the response (Crucial for enterprise trust).
* **🐳 Containerized Deployment:** Fully Dockerized setup for consistent deployment across environments.

---

## 🛠️ Tech Stack & Architecture

This project leverages a microservices architecture to ensure scalability and separation of concerns.

### **Frontend (Client)**
* **Framework:** Angular 17+ (Signals, Standalone Components)
* **Styling:** Tailwind CSS / Angular Material
* **Role:** Handles user interactions, visualization of chat history, and document management.

### **Backend (API)**
* **Framework:** Python (FastAPI)
* **Role:** Orchestrates the ingestion pipeline and handles query routing.

### **AI & Data Layer**
* **Orchestration:** LangChain
* **Vector Database:** ChromaDB (Persisted volume)
* **LLM Integration:** OpenAI API (configurable for local LLMs via Ollama)

---

## 🏗️ Architecture Diagram

```mermaid
graph LR
    A[User / Angular App] -- Query --> B(FastAPI Backend)
    B -- Embed Query --> C{Vector Store / ChromaDB}
    C -- Retrieve Context --> B
    B -- Context + Query --> D[LLM / OpenAI]
    D -- Answer --> B
    B -- Response --> A
