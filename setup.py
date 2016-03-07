import os
import codecs
from setuptools import setup, find_packages


def read(*parts):
    filename = os.path.join(os.path.dirname(__file__), *parts)
    with codecs.open(filename, encoding='utf-8') as fp:
        return fp.read()


setup(
    name="django-admin-locking",
    version='0.7.1',
    description="A reusable app for locking objects within the admin while another editor"
    "is editing the page.",
    long_description=open('README.rst').read(),
    author="jonasvp",
    author_email="jvp@jonasundderwolf.de",
    url="https://dev.jonasundderwolf.de/opensource/django-admin-locking/",
    packages=find_packages(),
    include_package_data=True,
    test_suite='example.runtests.runtests',
    classifiers=[
        'Development Status :: 4 - Beta',
        'Environment :: Web Environment',
        'Framework :: Django',
        'Intended Audience :: Developers',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Topic :: Software Development :: Libraries :: Python Modules',
        'Programming Language :: Python',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.4',
    ],
)
