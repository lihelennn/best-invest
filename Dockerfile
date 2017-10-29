FROM centos/nodejs-8-centos7

USER root
RUN yum install -y python
RUN pip install flask

USER 1001
