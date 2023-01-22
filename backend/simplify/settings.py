from pathlib import Path
import environ

env = environ.Env(
    DEBUG=(bool, False)
)

environ.Env.read_env()

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = env("SK")
DEBUG = env("DEBUG")
AUTH_USER_MODEL = "member.Member"


ALLOWED_HOSTS = []

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # local
    'member',
    'transactions',
    # 3rd party
    'rest_framework',
    'corsheaders',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'simplify.urls'
CORS_ALLOWED_ORIGINS = ["http://localhost:3000"]


TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'simplify.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


# Password validation
# https://docs.djangoproject.com/en/3.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.2/howto/static-files/

STATIC_URL = '/static/'

# Default primary key field type
# https://docs.djangoproject.com/en/3.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# Card Types

CREDIT = "Credit"
DEBIT = "Debit"

CARD_TYPES = (
    (DEBIT, 'Debit Card'),
    (CREDIT, 'Credit Card')
)

# Frequency Types

ONCE = "One-time"
DAILY = "Daily"
WEEKLY = "Weekly"
MONTHLY = "Monthly"
YEARLY = "Yearly"

FREQUENCY_TYPES_LIST = [
    ONCE, DAILY, WEEKLY, MONTHLY, YEARLY
]

FREQUENCY_TYPES = (
    (ONCE, "One-time"),
    (DAILY, "Daily"),
    (WEEKLY, "Weekly"),
    (MONTHLY, "Monthly"),
    (YEARLY, "Yearly"),
)

# Bank Types

RBC = "RBC"
TD = "TD"
NATIONAL = "NB"
BMO = "BMO"
SCOTIA = "SC"

BANK_TYPES = (
    (RBC, "RBC"),
    (TD, "TD"),
    (NATIONAL, "National Bank"),
    (BMO, "BMO"),
    (SCOTIA, "Scotia Bank")
)

# Expense Category

FOOD = "Food"
HOUSING = "Housing"
ENTERTAINMENT = "Entertainment"
MISCELLANEOUS = "Miscellaneous"

EXPENSES_CATEGORY_LIST = [FOOD, HOUSING, ENTERTAINMENT, MISCELLANEOUS]

EXPENSES_CATEGORY = (
    ('', '----'),
    (FOOD, "Food"),
    (HOUSING, "Housing"),
    (ENTERTAINMENT, "Entertainment"),
    (MISCELLANEOUS, "Miscellaneous"),
)

MEMBER_EMAIL = 'john@doe.com'
MEMBER_PASSWORD = 'theepicduck'
OPEN_AI_API_KEY = env('OPEN_AI_API_KEY')